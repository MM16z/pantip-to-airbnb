export function formatTimeDifference(createdTime: string): string {
  const now = new Date().getTime(); // Get the current time in milliseconds
  const createdDate = new Date(createdTime).getTime(); // Convert createdTime to milliseconds
  const diffMs = now - createdDate;

  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);

  if (diffHours >= 1) {
    return `${diffHours} ชั่วโมง`; // Use template literal
  } else if (diffMinutes >= 1) {
    return `${diffMinutes} นาที`; // Use template literal
  } else {
    return 'ไม่กี่วินาทีที่ผ่านมา'; // For times less than a minute
  }
}
