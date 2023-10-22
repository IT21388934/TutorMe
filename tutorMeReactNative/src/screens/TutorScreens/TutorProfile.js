import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TutorFragment } from "../../layouts/TutorFragment";

const TutorProfile = () => {
  return (
    <TutorFragment activeLink="profile">
      <Text>TutorProfile</Text>
    </TutorFragment>
  );
};

export default TutorProfile;

const styles = StyleSheet.create({});
