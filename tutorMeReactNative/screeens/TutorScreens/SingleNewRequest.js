import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { COLORS } from "../../constant/theme";
import BottomNav from "../../components/TutorBottomNav";

export default SingleNewRequest = () => {
  const activeLink = "NewRequest";

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* Your header content goes here */}
        </View>
        <View style={styles.newRequestContainer}>
          <Text style={styles.classTitle}>Object oriented Programming</Text>
        </View>
        <View style={styles.requestBody}>
          <View style={styles.detailInRow}>
            <Text style={styles.label}>Student Name :- </Text>
            <Text style={styles.content}>Janth Thushara</Text>
          </View>
          <View style={styles.detailInRow}>
            <Text style={styles.label}>Session Date :- </Text>
            <Text style={styles.content}>2023/10/31 </Text>
          </View>
          <View style={styles.detailInRow}>
            <Text style={styles.label}>Session Time :- </Text>
            <Text style={styles.content}>12.30 - 14.30 </Text>
          </View>
          <View style={styles.detailInColumn}>
            <Text style={styles.label}>Reason </Text>
            <Text style={styles.content}>
              I am requesting an object-oriented programming class session to
              enhance my understanding of OOP concepts and their practical
              application. I need clarification in areas like inheritance,
              polymorphism, and design patterns to improve my coding skills and
              tackle complex projects effectively.{" "}
            </Text>
          </View>
          <View style={styles.detailInRow}>
            <Text style={styles.label}>Session Time :- </Text>
            <Text style={styles.content}>12.30 - 14.30 </Text>
          </View>
        </View>
      </View>
      <BottomNav activeLink={activeLink} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGreen,
    padding: 16,
  },
  headerContainer: {
    padding: 16,
  },
  newRequestContainer: {
    padding: 8,
  },
  requestBody: {
    padding: 16,
  },

  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  classTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  detailInRow: {
    marginBottom: 8,
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "row",
  },
  content: {
    fontSize: 16,
    padding: 2,
  },
  detailInColumn: {
    marginBottom: 8,
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "column",
  },
});
