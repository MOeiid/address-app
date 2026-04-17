import { SafeAreaProvider } from "react-native-safe-area-context";
import { AddressScreen } from "./src/screens/AddressScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <AddressScreen />
    </SafeAreaProvider>
  );
}
