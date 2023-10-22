import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screeens/Login";
import MyClasses from "./screeens/TutorScreens/MyClasses";

import NewRequests from "./screeens/TutorScreens/NewRequests";
import SingleNewRequest from "./screeens/TutorScreens/SingleNewRequest";
import ClassDetails from "./screeens/TutorScreens/ClassDetails";

export default function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <MyClasses /> */}
      {/* <NewRequests/> */}
      {/* <SingleNewRequest /> */}
      <ClassDetails />
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
