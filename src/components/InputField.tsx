import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

export const InputField = ({ label, placeholder, value, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    padding: 14,
    backgroundColor: colors.white,
  },
});
