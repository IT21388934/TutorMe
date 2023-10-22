import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TutorFragment } from "../../layouts/TutorFragment";

const Calendar = () => {
  return (
    <TutorFragment activeLink="calendar">
      <Text>Calendar</Text>
    </TutorFragment>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
