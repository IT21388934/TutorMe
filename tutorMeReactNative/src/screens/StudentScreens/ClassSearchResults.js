import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StudentFragment } from "../../layouts/StudentFragment";
import { COLORS } from "../../constants/theme";

const classes = [
  {
    tutorName: "John Smith",
    tutorImage:
      "https://www.lipscomb.edu/sites/default/files/images-staff/2018-11/Smith_John_web2.jpg",
    className: "Introduction to Mathematics",
    duration: "2 hours",
    price: 2000,
  },
  {
    tutorName: "Emily Johnson",
    tutorImage:
      "https://hungercenter.org/wp-content/uploads/2015/08/EF_Johnson_Emily.jpg",
    className: "Data Structures & Algorithms",
    duration: "2 hours",
    price: 4500,
  },
  {
    tutorName: "Sarah Lee",
    tutorImage:
      "https://media.licdn.com/dms/image/C4D03AQEC8_pMsY_1Rw/profile-displayphoto-shrink_800_800/0/1650918032785?e=2147483647&v=beta&t=ZV5DErFmnaJr2DKJ05ImLyGptcSb8jrxIzpCjwTozOU",
    className: "Probability & Statistics",
    duration: "2 hours",
    price: 3000,
  },
  {
    tutorName: "Michael Davis",
    tutorImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbZ7PP8GurMxCUri_Ktrbu3MT166_29TJ7g&usqp=CAU",
    className: "Introduction to Programming",
    duration: "1 hour",
    price: 5000,
  },
];

const ClassSearchResults = ({ route, navigation }) => {
  // Retrieve the parameter from the route prop
  const { searchText } = route.params;
  const { category } = route.params;

  const renderClassItem = ({ item }) => (
    <TouchableOpacity
      style={styles.classCard}
      onPress={() => navigation.navigate("requestSession")}
    >
      <View style={styles.classCardTop}>
        <Text style={styles.classTutor}>{item.tutorName}</Text>
        <Image source={{ uri: item.tutorImage }} style={styles.tutorImage} />
      </View>
      <Text style={styles.className}>{item.className}</Text>
      <View style={styles.classCardBottom}>
        <Text style={styles.classDuration}>{item.duration}</Text>
        <View style={styles.classPriceContainer}>
          <Text style={styles.classPrice}>Rs. {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <StudentFragment activeLink="">
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Classes</Text>
      </View>
      <FlatList
        data={classes}
        renderItem={renderClassItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        style={styles.classList}
      />
    </StudentFragment>
  );
};

export default ClassSearchResults;

const styles = StyleSheet.create({
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
  classList: {
    padding: 10,
  },
  classCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    margin: 6,
    flex: 1,
  },
  classCardTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tutorImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  className: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 6,
    flex: 1,
  },
  classTutor: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  classCardBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  classDuration: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  classPriceContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  classPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.orange,
  },
});
