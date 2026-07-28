import { Text } from "react-native";
import { useSelector } from "react-redux";

import LabelContainer from "@/src/components/LabelContainer";
import SectionContainer from "@/src/components/SectionContainer";
import { Customer } from "@/src/types";
import { getIsActiveLabel, getRegionLabel } from "@/src/utilities/helper";

import stylesFn from "./styles";

const CustomerView = ({
  customerId,
  regionId,
  title,
}: {
  customerId: string;
  regionId: string | null;
  title?: string;
}) => {
  const styles = stylesFn();
  const customer: Customer = useSelector(
    (state: any) => state.customer.list.customers[customerId],
  );

  if (!customer) {
    return null;
  }

  return (
    <SectionContainer title={title}>
      <LabelContainer label="ID:">
        <Text style={[styles.text, styles.toUpper]}>{customer.id}</Text>
      </LabelContainer>
      <LabelContainer label="First Name:">
        <Text style={[styles.text, styles.toUpper]}>{customer.firstName}</Text>
      </LabelContainer>
      <LabelContainer label="Last Name:">
        <Text style={[styles.text, styles.toUpper]}>{customer.lastName}</Text>
      </LabelContainer>
      <LabelContainer label="Active:">
        <Text style={[styles.text, styles.toUpper]}>
          {getIsActiveLabel(customer.isActive)}
        </Text>
      </LabelContainer>
      <LabelContainer label="Region:">
        <Text style={[styles.text, styles.toUpper]}>
          {getRegionLabel(regionId)}
        </Text>
      </LabelContainer>
    </SectionContainer>
  );
};

export default CustomerView;
