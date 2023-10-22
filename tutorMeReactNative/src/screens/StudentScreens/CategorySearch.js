import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StudentFragment } from "../../layouts/StudentFragment";

const CategorySearch = () => {
  return (
    <StudentFragment activeLink="search">
      <Text>CategorySearch</Text>
    </StudentFragment>
  );
};

export default CategorySearch;

const styles = StyleSheet.create({});
