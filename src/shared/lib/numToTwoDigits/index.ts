export default function numToTwoDigits(num: number): string {
  return num.toString().padStart(2, "0");
}
