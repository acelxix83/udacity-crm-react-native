import { useRoute } from "@react-navigation/native";

import CustomerForm from "@/src/features/components/Customer/components/Form";
import {
  useEditCustomer,
  useEditCustomerStatus,
} from "@/src/features/components/Customer/hooks";

const EditCustomer = () => {
  const route = useRoute<any>();
  const customerId = route.params?.customerId as string;

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
