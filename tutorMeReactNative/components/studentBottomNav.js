import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  home,
  homeSelected,
  profile,
  profileSelected,
  studyMaterial,
  studyMaterialSelected,
  search,
  searchSelected,
} from "../constant/images";

export default function BottomNav(pageName) {
  const activeLink = pageName.activeLink;
  console.log(activeLink);
  return (
    <View style={styles.bottomNav}>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            activeLink === "home" && { backgroundColor: "green" },
          ]}
        >
          {activeLink === "home" ? (
            <Image source={homeSelected} style={styles.navIcon} />
          ) : (
            <Image source={home} style={styles.navIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            activeLink === "search" && { backgroundColor: "green" },
          ]}
        >
          {activeLink === "search" ? (
            <Image source={searchSelected} style={styles.navIcon} />
          ) : (
            <Image source={search} style={styles.navIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            activeLink === "studyMaterials" && { backgroundColor: "green" },
          ]}
        >
          {activeLink === "studyMaterials" ? (
            <Image source={studyMaterialSelected} style={styles.navIcon} />
          ) : (
            <Image source={studyMaterial} style={styles.navIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            activeLink === "profile" && { backgroundColor: "green" },
          ]}
        >
          {activeLink === "profile" ? (
            <Image source={profileSelected} style={styles.navIcon} />
          ) : (
            <Image source={profile} style={styles.navIcon} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  linkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: 80,
  },
  iconContainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  navIcon: {
    height: 40,
    width: 40,
  },
});
