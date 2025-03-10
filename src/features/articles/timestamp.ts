export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);

  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "")
    .toLowerCase();
}

// Usage
const timestamp = 1741245569308;
console.log(formatTimestamp(timestamp)); // "mar 7, 2025 6:25 am"
