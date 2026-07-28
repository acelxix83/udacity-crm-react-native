import { Text } from "react-native";
import { useSelector } from "react-redux";

import LabelContainer from "@/src/components/LabelContainer";
import SectionContainer from "@/src/components/SectionContainer";
import { regions } from "@/src/constants/regions";
import { Customer } from "@/src/types";
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

  const getRegionLabel = (regionId: string | null) => {
    if (!regionId) return "N/A";
    const region = regions.find((region) => region.value === regionId);
    return region ? region.label : "N/A";
  };

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
          {customer.isActive ? "Yes" : "No"}
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
