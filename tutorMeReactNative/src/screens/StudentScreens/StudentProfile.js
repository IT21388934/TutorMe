import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StudentFragment } from "../../layouts/StudentFragment";

const StudentProfile = () => {
  return (
    <StudentFragment activeLink="profile">
      <Text>StudentProfile</Text>
    </StudentFragment>
  );
};

export default StudentProfile;

const styles = StyleSheet.create({});
