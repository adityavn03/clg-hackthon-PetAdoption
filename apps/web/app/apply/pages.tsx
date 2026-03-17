"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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
    <main style={{ marginTop: 18 }}>
      <div className="row">
        <div>
          <h1 className="h1" style={{ marginBottom: 6 }}>
            Adoption application
          </h1>
          <p className="muted" style={{ margin: 0 }}>
            We’ll review your application and update the status.
          </p>
        </div>
        <Link href="/pets" className="btn">
          Browse pets
        </Link>
      </div>

      <section className="panel" style={{ marginTop: 14 }}>
        <form onSubmit={handleSubmit} className="grid" style={{ gap: 12 }}>
          <div className="formGrid2">
            <input
              className="field"
              name="applicantName"
              value={form.applicantName}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
            <input
              className="field"
              name="applicantEmail"
              type="email"
              value={form.applicantEmail}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
          </div>

          <div className="formGrid2">
            <input
              className="field"
              name="applicantPhone"
              value={form.applicantPhone}
              onChange={handleChange}
              placeholder="Phone (optional)"
            />
            <input
              className="field"
              name="petId"
              value={form.petId}
              onChange={handleChange}
              placeholder="Pet ID"
              required
            />
          </div>

          <input
            className="field"
            name="applicantAddress"
            value={form.applicantAddress}
            onChange={handleChange}
            placeholder="Address (optional)"
          />

          <textarea
            className="field"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Why do you want to adopt this pet? (optional)"
            rows={4}
            style={{ resize: "vertical" }}
          />

          <button className="btn btnPrimary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit application"}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <div className="notice" style={{ borderColor: success.includes("success") ? "rgba(54,211,153,.35)" : undefined, background: success.includes("success") ? "rgba(54,211,153,.16)" : undefined, color: success.includes("success") ? "var(--ok)" : undefined }}>
            {success}
          </div>
        )}
      </section>
    </main>
  );
}