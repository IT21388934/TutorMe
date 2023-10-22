import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { COLORS } from "../../constant/theme";
import globalStyles from "../../global/globalStyles";

import BottomNav from "../../components/TutorBottomNav";
import Tags from "../../components/Tags";
import SessionSlot from "../../components/SessionSlot";

import { editIcon, trash } from "../../constant/images";

export default function ClassDetails() {
  const activeLink = "MyClasses";

  const [tags, setTags] = useState([
    "OOP",
    "C",
    "Computing",
    "Programming",
    "1st year",
    "2nd sem",
    "Object Oriented Programming",
  ]);

  const [sessionSlot, setSessionSlot] = useState([
    {
      day: "Sunday",
      startTime: "12.30",
      endTime: "14.30",
    },
    {
      day: "Monday",
      startTime: "11.30",
      endTime: "13.30",
    },
    {
      day: "Tuesday",
      startTime: "8.30",
      endTime: "10.30",
    },
  ]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* Your header content goes here */}
        </View>

        <ScrollView>
          <View style={styles.rowContainer}>
            <View>
              <Image
                source={require("../../assets/images/tutorProfileImage.png")}
                style={{
                  width: 64,
                  height: 64,
                  backgroundColor: COLORS.green,
                  borderRadius: 10,
                }}
              ></Image>
            </View>
            <View style={globalStyles.rightAline}>
              <Text style={globalStyles.boldF24mb2}>Suresh Wijesekara</Text>
              <Text style={globalStyles.boldF16mb2}>Faculty of Computing</Text>
              <Text style={globalStyles.regularF14}>3rd year 2nd sem</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={globalStyles.boldF24mb8}>
              ObJect Oriented Programming
            </Text>
            <Text style={globalStyles.regularF16}>
              "Join a 2-hour class to learn about Object-Oriented Programming
              with C language. Explore key concepts and practical use in a
              simple way."
            </Text>
          </View>
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <Tags key={index} tagText={tag} />
            ))}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceWhiteBg}>Rs: 2000.00 per session</Text>
          </View>
          <View style={styles.container}>
            <Text style={globalStyles.boldF16mb8}>Session Times</Text>
            {sessionSlot.map((sessionSlot, index) => (
              <SessionSlot key={index} sessionSlot={sessionSlot} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.rowContainer}>
          <View style={styles.deleteBtn}>
            <Image source={trash} style={{ width: 24, height: 24 }} />
          </View>
          <View style={styles.editBtn}>
            <Image source={editIcon} style={{ width: 24, height: 24 }} />
          </View>
        </View>
      </View>
      <BottomNav activeLink={activeLink} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGreen,
    padding: 16,
  },
  headerContainer: {
    padding: 16,
  },

  gridContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
  },

  newClassTag: {
    color: COLORS.primary,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.green,
    borderRadius: 8,
  },

  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },

  priceContainer: {
    paddingLeft: 16,
    borderRadius: 10,
    // width: "40%",
    // alignContent: "center",
    alignItems: "flex-start",
  },

  priceWhiteBg: {
    backgroundColor: COLORS.white,
    color: COLORS.orange,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  sessionBar: {
    backgroundColor: COLORS.white,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
  },
  sessionDetails: {
    color: COLORS.darkGreen,
    fontWeight: "bold",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sessionInfo: {
    color: COLORS.darkGreen,
    // fontWeight: "bold",
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: COLORS.redButton,
    borderRadius: 10,
    width: 100,
    height: 40,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  editBtn: {
    backgroundColor: COLORS.blueButton,
    borderRadius: 10,
    width: 100,
    height: 40,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
