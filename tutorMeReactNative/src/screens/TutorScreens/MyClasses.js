import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { COLORS } from "../../constants/theme";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import { TutorFragment } from "../../layouts/TutorFragment";

export default function MyClasses() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      className: "Oject-Oriented Programming",
      classDescription: "Learn the basics of OOP",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "John Doe",
    },
    {
      id: 2,
      className: "Java Basic Programming",
      classDescription: "class Description",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "",
    },
    {
      id: 3,
      className: "Data Structure and Algorithm",
      classDescription: "Learn the basics of OOP , line 2",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "John Doe",
    },
    {
      id: 4,
      className: "Kotlin Mobile application development",
      classDescription: "Learn the basics of OOP , line 2",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "John Doe",
    },

    // Add more data items here
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    const filteredData = data.filter((item) => {
      return item.className.toLowerCase().includes(text.toLowerCase());
    });

    setSearchText(text);
    setFilteredData(filteredData);
  };

  return (
    <TutorFragment activeLink="myClasses">
      <SearchBar handleSearch={handleSearch} searchText={searchText} />
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set the number of columns to 2
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => <Card item={item} />}
      />
    </TutorFragment>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
});
