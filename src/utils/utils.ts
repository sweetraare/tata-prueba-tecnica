// this could be changed with a library to get INTL values
export function dateReadable(date: Date): string {
  const dateString = date.toString();
  const tindex = dateString.indexOf("T");

  return dateString.substring(0, tindex);
}
