import { Customer } from "@/src/types";

function generateUniqueId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export const createCustomer = (newCustomer: Customer) => {
  // Simulate an API call to create a new customer
  return new Promise((resolve) => {
    const responseCustomer = { ...newCustomer, id: generateUniqueId() };
    setTimeout(() => resolve(responseCustomer), 1000);
  });
};

export const editCustomer = (updatedCustomer: Customer) => {
  // Simulate an API call to edit a customer
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};
