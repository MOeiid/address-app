import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";
import { ProgressSteps } from "../components/ProgressSteps";
import { InputField } from "../components/InputField";
import { SelectField } from "../components/SelectField";
import { AddressForm } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export const AddressScreen = () => {
  const [form, setForm] = useState<AddressForm>({
    government: "",
    city: "",
    district: "",
    street: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.topSection}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={{ position: "absolute", left: 0 }}>
              <Ionicons name="chevron-back" size={22} color="#ddd" />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: "center" }}>
              <ProgressSteps />
            </View>
          </View>

          <Text style={styles.stepText}>Step 1 of 3</Text>

          <Text style={styles.title}>Add your Address</Text>

          <Text style={styles.subtitle}>
            Provide your address to ensure accurate connections and better
            matching.
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.form}>
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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
            <Ionicons name="chevron-forward" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topSection: {
    padding: 20,
    marginTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  stepText: {
    color: colors.textPrimary,
    marginBottom: 8,
    fontWeight: "700",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: "400",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 16,
    justifyContent: "space-between",
  },
  form: {
    gap: 10,
    paddingTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
