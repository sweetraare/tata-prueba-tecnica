// this could be changed with a library to get INTL values
export function dateReadable(date: Date): string {
  const dateString = date.toISOString();
  const tindex = dateString.indexOf("T");

  return dateString.substring(0, tindex);
}

export function validateDate(value: string): boolean {
  const dateRegex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
  return !dateRegex.test(value);
}
