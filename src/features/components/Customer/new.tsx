import CustomerForm from "./form";
import { useCreateCustomer, useCreateCustomerStatus } from "./hooks";

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
