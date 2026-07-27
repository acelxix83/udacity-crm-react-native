import { useCreateCustomer, useCreateCustomerStatus } from "../hooks";
import CustomerForm from "./form";

const NewCustomer = () => {
  const status = useCreateCustomerStatus();
  const { handleSubmit } = useCreateCustomer();
  return (
    <CustomerForm
      status={status}
      customerId={null}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewCustomer;
