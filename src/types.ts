export type Customer = {
  id: string | null;
  firstName: string;
  lastName: string;
  isActive: boolean;
  regionId: string | null;
  home: string | null;
  mobile: string | null;
  email: string | null;
  notes: string | null;
};

export type Region = {
  id: string | null;
  customerIds: string[];
};

export type CustomerRequest = {
  originalRegion: string | null;
  customer: Customer;
};

export type CustomerResult = {
  customerId: string;
  originalRegion: string | null;
  customers: Record<string, Customer>;
};
