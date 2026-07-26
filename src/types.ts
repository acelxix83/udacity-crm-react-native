export type Customer = {
  id: string | null;
  firstName: string;
  lastName: string;
  isActive: boolean;
  regionId: string | null;
};

export type Region = {
  id: string | null;
  customerIds: string[];
};
