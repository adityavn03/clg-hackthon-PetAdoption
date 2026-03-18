export function formatAgeMonths(months: number | null): string {
  if (months === null) return "Age unknown";
  const m = Math.max(0, Math.floor(months));
  if (m < 1) return "Less than a month";
  if (m < 12) return `${m} ${m === 1 ? "month" : "months"}`;
  
  const years = Math.floor(m / 12);
  const rem = m % 12;
  
  if (rem === 0) return `${years} ${years === 1 ? "year" : "years"}`;
  return `${years}y ${rem}m`;
}
