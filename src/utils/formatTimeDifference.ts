export function formatTimeDifference(createdTime: string): string {
  const createdDate = new Date(createdTime);

  if (Number.isNaN(createdDate.getTime())) {
    return ' ';
  }

  const now = new Date().getTime();
  const diffMs = now - createdDate.getTime();

  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);

  if (diffHours >= 1) {
    return `${diffHours} ชั่วโมง`;
  } else if (diffMinutes >= 1) {
    return `${diffMinutes} นาที`;
  } else {
    return 'ไม่กี่วินาทีที่ผ่านมา';
  }
}
