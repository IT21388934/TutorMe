import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screeens/Login";
import MyClasses from "./screeens/TutorScreens/MyClasses";

export default function App() {
  return (
    <>
      {/* <Login /> */}
      <MyClasses />
      <StatusBar style="auto" />
    </>
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
