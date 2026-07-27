import * as actions from "@/src/features/components/Customer/reducers";
import { CustomerRequest } from "@/src/types";
import { useDispatch, useSelector } from "react-redux";

export const useCreateCustomer = () => {
  const dispatch = useDispatch();

  const createCustomer = {
    handleSubmit: (customerRequest: CustomerRequest) => {
      dispatch(actions.createCustomer(customerRequest));
    },
  };

  return createCustomer;
};

export const useEditCustomer = () => {
  const dispatch = useDispatch();

  const editCustomer = {
    handleSubmit: (customerRequest: CustomerRequest) => {
      dispatch(actions.editCustomer(customerRequest));
    },
  };

  return editCustomer;
};

export const useCreateCustomerStatus = () => {
  return useSelector((state: any) => state.customer.create.status);
};

export const useEditCustomerStatus = () => {
  return useSelector((state: any) => state.customer.edit.status);
};
