import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StudentFragment } from "../../layouts/StudentFragment";

const StudyMaterials = () => {
  return (
    <StudentFragment activeLink="studyMaterials">
      <Text>StudyMaterials</Text>
    </StudentFragment>
  );
};

export default StudyMaterials;

const styles = StyleSheet.create({});
