import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StudentFragment } from "../../layouts/StudentFragment";

const StudentHome = () => {
  return (
    <StudentFragment activeLink="home">
      <Text>StudentHome</Text>
    </StudentFragment>
  );
};

export default StudentHome;

const styles = StyleSheet.create({});
