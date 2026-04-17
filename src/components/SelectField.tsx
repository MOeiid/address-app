import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  label: string;
  value?: string;
  placeholder: string;
  onPress: () => void;
};

export const SelectField = ({ label, value, placeholder, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.select} onPress={onPress}>
        <Text style={{ color: value ? "#000" : "#aaa" }}>
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: "700",
  },
  select: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});
