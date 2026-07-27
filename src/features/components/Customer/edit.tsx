import { useLocalSearchParams } from "expo-router";
import CustomerForm from "./form";
import { useEditCustomer, useEditCustomerStatus } from "./hooks";

const EditCustomer = () => {
  const { customerId } = useLocalSearchParams();
  const status = useEditCustomerStatus();

  const { handleSubmit } = useEditCustomer();

  return (
    <CustomerForm
      status={status}
      customerId={customerId as string}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditCustomer;
