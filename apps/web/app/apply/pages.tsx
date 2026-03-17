"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const petIdFromUrl = searchParams.get("petId") ?? "";
  const [form, setForm] = useState({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    applicantAddress: "",
    petId: petIdFromUrl,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSuccess("Application submitted successfully!");
      setForm({
        applicantName: "",
        applicantEmail: "",
        applicantPhone: "",
        applicantAddress: "",
        petId: petIdFromUrl,
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h1 style={{ margin: "0 0 6px", fontSize: 34 }}>Adoption application</h1>
          <p style={{ margin: 0, color: "#b8c2e8" }}>
            Submit your details and we’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          
          {/* Row 1 */}
          <div style={styles.row2}>
            <input
              name="applicantName"
              value={form.applicantName}
              onChange={handleChange}
              placeholder="Full Name"
              style={styles.input}
              required
            />

            <input
              name="applicantEmail"
              type="email"
              value={form.applicantEmail}
              onChange={handleChange}
              placeholder="Email Address"
              style={styles.input}
              required
            />
          </div>

          {/* Row 2 */}
          <div style={styles.row2}>
            <input
              name="applicantPhone"
              value={form.applicantPhone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
              style={styles.input}
            />

            <input
              name="petId"
              value={form.petId}
              onChange={handleChange}
              placeholder="Pet ID"
              style={styles.input}
              required
            />
          </div>

          {/* Address */}
          <input
            name="applicantAddress"
            value={form.applicantAddress}
            onChange={handleChange}
            placeholder="Address (optional)"
            style={styles.input}
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Why do you want to adopt this pet?"
            rows={4}
            style={{ ...styles.input, resize: "vertical" }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "linear-gradient(135deg, #5b7cfa, #9b6bff)",
              color: "white",
              fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <div
            style={{
              marginTop: 14,
              textAlign: "center",
              fontWeight: 700,
              color: success.includes("success") ? "#6ef2c4" : "#ffd59a",
            }}
          >
            {success}
          </div>
        )}
      </div>

    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 760,
    padding: 18,
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    backdropFilter: "blur(8px)",
  },
  row2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.25)",
    color: "#eaf0ff",
    outline: "none",
  },
};