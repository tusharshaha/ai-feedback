export function formatDate(data: string) {
  const date = new Date(data);
  // Format as month/date/year
  const formattedDate = new Intl.DateTimeFormat('en-US').format(date);

  return formattedDate;
}
