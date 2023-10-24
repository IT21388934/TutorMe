import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/theme";

import Card from "../../components/Card";
import BottomNav from "../../components/TutorBottomNav";
import SearchBar from "../../components/SearchBar";
import FloatingButton from "../../components/FloatingButton";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function MyClasses({ navigation }) {
  const userId = FIREBASE_AUTH.currentUser.uid;
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    const filteredData = data.filter((item) => {
      return item.className.toLowerCase().includes(text.toLowerCase());
    });

    setSearchText(text);
    setFilteredData(filteredData);
  };

  const handleFloatingButton = () => {
    console.log("Floating button pressed");
    navigation.navigate("addClass");
  };

  useEffect(() => {
    // Define a query to get classes where categorySearch is "Computing" for the current user.
    const q = query(
      collection(FIRESTORE_DB, "classes"),
      where("userId", "==", userId)
    );

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(q);
        const classesData = [];

        querySnapshot.forEach((doc) => {
          // Include the document ID along with the data
          const classDataWithId = {
            id: doc.id, // Add the document ID here
            ...doc.data(),
          };

          classesData.push(classDataWithId);
        });
        console.log("classesData: ", classesData);
        classesData.forEach((classData) => {
          console.log("id", classData.id);
        });
        setData(classesData);
        setFilteredData(classesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Classes</Text>
      </View>

      <View style={styles.tagsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("newRequests")}>
          <Text style={styles.newClassTag}>New Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bookedClassesTag}>Booked Class</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.completedClassTag}>Completed Class</Text>
        </TouchableOpacity>
      </View>

      <SearchBar handleSearch={handleSearch} searchText={searchText} />
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns to 2
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => <Card item={item} />}
      />
      <FloatingButton onPress={handleFloatingButton} />

      <BottomNav activeLink={"myClasses"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGreen,
  },
  headerContainer: {
    padding: 18,
    backgroundColor: COLORS.green,
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.white,
  },
  gridContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },

  tagsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },

  newClassTag: {
    color: COLORS.primary,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.green,
    borderRadius: 8,
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
