import { boolOptions } from "../constants/boolOptions";
import { DEFAULT_TEXT } from "../constants/defaultValues";
import { regions } from "../constants/regions";

export function formatPhoneNumber(phoneNumber: string | null): string | null {
  if (!phoneNumber) {
    return null;
  }
  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, "");

  // Format the number as (XXX) XXX-XXXX
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  return phoneNumber;
}

export const getRegionLabel = (regionId: string | null) => {
  if (!regionId) return DEFAULT_TEXT;
  const region = regions.find((region) => region.value === regionId);
  return region ? region.label : DEFAULT_TEXT;
};

export const getIsActiveLabel = (isActive: boolean | null) => {
  if (isActive === null) return DEFAULT_TEXT;
  return (
    boolOptions.find((option) => option.value === isActive.toString())?.label ||
    DEFAULT_TEXT
  );
};
