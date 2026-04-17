import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ProgressSteps } from "../../components/ProgressSteps";
import { AddressForm } from "../../components/AddressForm";
import { AddressForm as AddressFormType } from "../../types";
import { styles } from "./styles";

export const AddressScreen = () => {
  const [form, setForm] = useState<AddressFormType>({
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
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="chevron-back" size={22} color="#ddd" />
            </TouchableOpacity>

            <View style={styles.stepsContainer}>
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
          <AddressForm form={form} setForm={setForm} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
            <Ionicons name="chevron-forward" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
