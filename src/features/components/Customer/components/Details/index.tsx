import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import Button from "@/src/components/Button";
import LabelContainer from "@/src/components/LabelContainer";
import SectionContainer from "@/src/components/SectionContainer";
import { DEFAULT_TEXT } from "@/src/constants/defaultValues";
import { formatCellNumber } from "@/src/utilities/helper";
import CustomerView from "../View";
import stylesFn from "./styles";

const CustomerDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const customerId = route.params?.customerId as string;

  const customer = useSelector(
    (state: any) => state.customer.list.customers[customerId as string],
  );

  const styles = stylesFn();

  return (
    <View style={styles.customerDetailsContainer}>
      <View>
        <CustomerView
          customerId={customerId}
          regionId={customer?.regionId || null}
          title="Customer Information"
        />
        <SectionContainer title="Contact Information">
          <LabelContainer label="Cell:">
            <Text style={styles.text}>
              {formatCellNumber(customer?.cell || DEFAULT_TEXT)}
            </Text>
          </LabelContainer>
          <LabelContainer label="Mobile:">
            <Text style={styles.text}>
              {formatCellNumber(customer?.mobile || DEFAULT_TEXT)}
            </Text>
          </LabelContainer>
          <LabelContainer label="Email:">
            <Text style={styles.text}>{customer?.email || DEFAULT_TEXT}</Text>
          </LabelContainer>
        </SectionContainer>
        <SectionContainer title="Other">
          <LabelContainer label="Notes:">
            <Text style={styles.text}>{customer?.notes || DEFAULT_TEXT}</Text>
          </LabelContainer>
        </SectionContainer>
      </View>
      <Button
        onPress={() => navigation.navigate("EditCustomer", { customerId })}
        title="Edit Customer"
      />
    </View>
  );
};

export default CustomerDetails;
