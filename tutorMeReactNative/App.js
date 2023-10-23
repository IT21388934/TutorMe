import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

//common
import Login from "./src/screens/Login";
import SignUpOptions from "./src/screens/SignUpOptions";
import StudentSignUp from "./src/screens/StudentSignUp";
import TutorSignUp from "./src/screens/TutorSignUp";

//student
import StudentHome from "./src/screens/StudentScreens/StudentHome";
import CategorySearch from "./src/screens/StudentScreens/CategorySearch";
import StudyMaterials from "./src/screens/StudentScreens/StudyMaterials";
import StudentProfile from "./src/screens/StudentScreens/StudentProfile";
import ClassSearchResults from "./src/screens/StudentScreens/ClassSearchResults";
import RequestSession from "./src/screens/StudentScreens/RequestSession";

//tutor
import TutorHome from "./src/screens/TutorScreens/TutorHome";
import MyClasses from "./src/screens/TutorScreens/MyClasses";
import Calendar from "./src/screens/TutorScreens/Calendar";
import TutorProfile from "./src/screens/TutorScreens/TutorProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TutorTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => null}>
      <Tab.Screen name="home" component={TutorHome} />
      <Tab.Screen name="myClasses" component={MyClasses} />
      <Tab.Screen name="calendar" component={Calendar} />
      <Tab.Screen name="profile" component={TutorProfile} />
    </Tab.Navigator>
  );
}

function TutorInside() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="main"
    >
      <Stack.Screen name="main" component={TutorTabs} />
      {/* other tutor screeens which doesn't contain bottom navigation bar */}
    </Stack.Navigator>
  );
}

function StudentTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => null}>
      <Tab.Screen name="home" component={StudentHome} />
      <Tab.Screen name="search" component={CategorySearch} />
      <Tab.Screen name="studyMaterials" component={StudyMaterials} />
      <Tab.Screen name="profile" component={StudentProfile} />
      <Tab.Screen name="searchResults" component={ClassSearchResults} />
    </Tab.Navigator>
  );
}

function StudentInside() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="main"
    >
      <Stack.Screen name="main" component={StudentTabs} />
      {/* other student screeens which doesn't contain bottom navigation bar */}
      <Stack.Screen name="requestSession" component={RequestSession} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState("notNull"); //set useState() for login screen
  const [userType, setUserType] = useState("student"); //switch between student and tutor

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false, statusBarColor: "green" }}
      >
        {user ? (
          userType === "student" ? (
            <Stack.Screen name="studentInside" component={StudentInside} />
          ) : (
            <Stack.Screen name="tutorInside" component={TutorInside} />
          )
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUpOptions" component={SignUpOptions} />
            <Stack.Screen name="studentSignUp" component={StudentSignUp} />
            <Stack.Screen name="tutorSignUp" component={TutorSignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
