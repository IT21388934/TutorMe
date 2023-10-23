import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";

import { COLORS } from "../../constant/theme";

import BottomNav from "../../components/TutorBottomNav";
import WildClassCard from "../../components/wildClassCard";

export default function NewRequest() {
  const activeLink = "MyClasses";
  const [numColumns, setNumColumns] = useState(1); // State for the number of columns

  const [data, setData] = useState([
    {
      id: 1,
      className: "Oject-Oriented Programming",
      student: "Janath Thushara",
      sessionDate: "2023/10/31",
      session: "12.30 - 2.30",
      //   classTutor: "John Doe",
    },
    {
      id: 2,
      className: "Java Basic Programming",
      student: "Janath Thushara",
      sessionDate: "2023/10/31",
      session: "12.30 - 2.30",
      //   classTutor: "",
    },
    {
      id: 3,
      className: "Data Structure and Algorithm",
      student: "Janath Thushara",
      sessionDate: "2023/10/31",
      session: "12.30 - 2.30",
      //   classTutor: "John Doe",
    },
    {
      id: 4,
      className: "Kotlin Mobile application development",
      student: "Janath Thushara",
      sessionDate: "2023/10/31",
      session: "12.30 - 2.30",
      //   classTutor: "John Doe",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Your header content goes here */}
      </View>
      <View style={styles.topTitleContainer}>
        {data.length > 0 ? (
          <Text style={styles.topTitle}>
            {data.length} New request{data.length > 1 ? "s" : ""}
          </Text>
        ) : (
          <Text>No new requests</Text>
        )}
      </View>
      <FlatList
        key={numColumns.toString()} // Use numColumns as the key
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns} // Use the numColumns state variable
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => <WildClassCard item={item} />}
      />
      <BottomNav activeLink={activeLink} />
    </View>
  );
}

// Rest of your styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGreen,
  },
  headerContainer: {
    padding: 16,
  },

  gridContainer: {
    // // flexDirection: "row",
    // // flexWrap: "wrap",
    // justifyContent: "space-between",
    padding: 16,
  },

  topTitleContainer: {
    marginLeft: 16,
    padding: 16,
  },

  topTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  bookedClassesTag: {
    color: COLORS.darkRed,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.tagsRed,
    borderRadius: 8,
  },

  completedClassTag: {
    color: COLORS.darkYellow,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.tagsYellow,
    borderRadius: 8,
  },
});
