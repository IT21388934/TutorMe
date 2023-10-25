import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/theme";
import { EvilIcons } from "@expo/vector-icons";

import Card from "../../components/Card";
import BottomNav from "../../components/TutorBottomNav";
import SearchBar from "../../components/SearchBar";
import FloatingButton from "../../components/FloatingButton";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect

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

  // Fetch data function
  const fetchData = async () => {
    const q = query(
      collection(FIRESTORE_DB, "classes"),
      where("userId", "==", userId)
    );

    try {
      const querySnapshot = await getDocs(q);
      const classesData = [];

      querySnapshot.forEach((doc) => {
        const classDataWithId = {
          id: doc.id,
          ...doc.data(),
        };

        classesData.push(classDataWithId);
      });

      setData(classesData);
      // console.log("id");
      setFilteredData(classesData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Use useFocusEffect to fetch data when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [userId])
  );

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
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <Card item={item} id={item.id} navigation={navigation} />
        )}
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
  availableClasses: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  boldText: {
    fontSize: 16,
  },
});
