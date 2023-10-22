import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TutorFragment } from "../../layouts/TutorFragment";

const TutorHome = () => {
  return (
    <TutorFragment activeLink="home">
      <Text>TutorHome</Text>
    </TutorFragment>
  );
};

export default TutorHome;

const styles = StyleSheet.create({});
