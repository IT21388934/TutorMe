import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import UserContext from "../contexts/UserContext";

//common
import Login from "../screens/Login";
import SignUpOptions from "../screens/SignUpOptions";
import StudentSignUp from "../screens/StudentSignUp";
import TutorSignUp from "../screens/TutorSignUp";

//student
import StudentHome from "../screens/StudentScreens/StudentHome";
import CategorySearch from "../screens/StudentScreens/CategorySearch";
import StudyMaterials from "../screens/StudentScreens/StudyMaterials";
import StudentProfile from "../screens/StudentScreens/StudentProfile";
import ClassSearchResults from "../screens/StudentScreens/ClassSearchResults";
import RequestSession from "../screens/StudentScreens/RequestSession";

//tutor
import TutorHome from "../screens/TutorScreens/TutorHome";
import MyClasses from "../screens/TutorScreens/MyClasses";
import Calendar from "../screens/TutorScreens/Calendar";
import TutorProfile from "../screens/TutorScreens/TutorProfile";
import NewRequests from "../screens/TutorScreens/NewRequests";
import SingleNewRequest from "../screens/TutorScreens/SingleNewRequest";
import ClassDetails from "../screens/TutorScreens/ClassDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TutorTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => null}>
      <Tab.Screen name="home" component={TutorHome} />
      <Tab.Screen name="myClasses" component={MyClasses} />
      <Tab.Screen name="calendar" component={Calendar} />
      <Tab.Screen name="profile" component={TutorProfile} />
      <Tab.Screen name="newRequests" component={NewRequests} />
      <Tab.Screen name="singleNewRequest" component={SingleNewRequest} />
      <Tab.Screen name="classDetails" component={ClassDetails} />
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

function CommonTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => null}>
      <Tab.Screen name="login" component={Login} />
      <Tab.Screen name="signUpOptions" component={SignUpOptions} />
      <Tab.Screen name="studentSignUp" component={StudentSignUp} />
      <Tab.Screen name="tutorSignUp" component={TutorSignUp} />
    </Tab.Navigator>
  );
}

function CommonInside() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Stack.Screen name="main" component={CommonTabs} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  // const [user, setUser] = useState(null); //set useState() for login screen
  // const [userType, setUserType] = useState("tutor"); //switch between student and tutor

  const { userData, setUserData } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false, statusBarColor: "green" }}
      >
        {userData !== null ? (
          userData.role === "student" ? (
            <Stack.Screen name="studentInside" component={StudentInside} />
          ) : (
            <Stack.Screen name="tutorInside" component={TutorInside} />
          )
        ) : (
          <Stack.Screen name="commonInside" component={CommonInside} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
