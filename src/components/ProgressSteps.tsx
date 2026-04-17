import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const ProgressSteps = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.step, styles.active]} />
      <View style={styles.step} />
      <View style={styles.step} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    gap: 4,
    width: 180,
  },
  step: {
    flex: 1,
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  active: {
    backgroundColor: colors.primary,
  },
});
