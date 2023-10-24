import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StudentFragment } from "../../layouts/StudentFragment";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const StudentProfile = () => {
  return (
    <StudentFragment activeLink="profile">
      <Text>StudentProfile</Text>
      <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </StudentFragment>
  );
};

export default StudentProfile;

const styles = StyleSheet.create({});
