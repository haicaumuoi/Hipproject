export default function dateFormat(date: Date) {
  const newDate = new Date(date);
  return (
    newDate.getDate() + '/' + newDate.getMonth() + '/' + newDate.getFullYear()
  );
}
