export function formatTime(unixUTC, timezoneOffsetInSeconds) {
  const localTime = new Date((unixUTC + timezoneOffsetInSeconds) * 1000);
  const hours = localTime.getUTCHours();
  const minutes = localTime.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}