import * as actions from "@/src/features/components/Customer/reducers";
import { CustomerRequest } from "@/src/types";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCreateCustomer = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (customerRequest: CustomerRequest) => {
      dispatch(actions.createCustomer(customerRequest));
    },
    [dispatch],
  );

  const createCustomer = useMemo(
    () => ({
      handleSubmit,
    }),
    [handleSubmit],
  );

  return createCustomer;
};

export const useEditCustomer = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (customerRequest: CustomerRequest) => {
      dispatch(actions.editCustomer(customerRequest));
    },
    [dispatch],
  );

  const editCustomer = useMemo(
    () => ({
      handleSubmit,
    }),
    [handleSubmit],
  );

  return editCustomer;
};

export const useCreateCustomerStatus = () => {
  return useSelector((state: any) => state.customer.create.status);
};

export const useEditCustomerStatus = () => {
  return useSelector((state: any) => state.customer.edit.status);
};
