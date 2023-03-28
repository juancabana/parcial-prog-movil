import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
export default function App() {
  return (
      <NavigationContainer
      //  style={styles.container}
       >
        {/* <NavigationStack /> */}
        <NavigationTab /> 
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
