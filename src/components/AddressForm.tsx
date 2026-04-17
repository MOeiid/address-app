import React from "react";
import { View, StyleSheet } from "react-native";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { AddressForm as AddressFormType } from "../types";

type Props = {
  form: AddressFormType;
  setForm: (value: AddressFormType) => void;
};

export const AddressForm = ({ form, setForm }: Props) => {
  return (
    <View style={styles.container}>
      <SelectField
        label="Government"
        value={form.government}
        placeholder="Select Your Government"
        onPress={() => {}}
      />

      <InputField
        label="City"
        placeholder="City"
        value={form.city}
        onChange={(text) => setForm({ ...form, city: text })}
      />

      <InputField
        label="District"
        placeholder="district"
        value={form.district}
        onChange={(text) => setForm({ ...form, district: text })}
      />

      <InputField
        label="Street"
        placeholder="street"
        value={form.street}
        onChange={(text) => setForm({ ...form, street: text })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingTop: 10,
  },
});
