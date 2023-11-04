export default function dateFormatter(ISOString, separator = "/") {
  if (!ISOString) return new Date().toLocaleDateString();
  const date = new Date(ISOString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}${separator}${month}${separator}${year}`;
}
