import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
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
  backButton: {
    position: "absolute",
    left: 0,
  },
  stepsContainer: {
    flex: 1,
    alignItems: "center",
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
