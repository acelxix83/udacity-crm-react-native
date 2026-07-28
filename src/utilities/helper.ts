export function formatCellNumber(cellNumber: string | null): string | null {
  if (!cellNumber) {
    return null;
  }
  // Remove all non-digit characters
  const digits = cellNumber.replace(/\D/g, "");

  // Format the number as (XXX) XXX-XXXX
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  return cellNumber;
}
