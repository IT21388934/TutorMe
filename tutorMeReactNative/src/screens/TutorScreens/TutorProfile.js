import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../../FirebaseConfig";
import UserContext from "../../contexts/UserContext";
import { TutorFragment } from "../../layouts/TutorFragment";

const TutorProfile = ({ navigation }) => {
	const { userData, setUserData } = useContext(UserContext);

	return (
		<TutorFragment activeLink="profile">
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={styles.rowContainer}>
						<Image
							source={
								userData.photoURL === null
									? require("../../assets/images/profile.png")
									: { uri: userData.photoURL }
							}
							style={styles.imageContainer}
						/>

						<View style={styles.profileContainer}>
							<Text style={styles.name}>
								{userData.firstName} {userData.lastName}
							</Text>
							<Text style={styles.course}>Faculty of Computing</Text>
							<Text style={styles.semester}>3rd Year 2nd Sem</Text>
						</View>
					</View>

					<View style={styles.buttonsContainer}>
						<TouchableOpacity
							style={
								styles.button
							} /*onPress={() => navigation.navigate("EditProfile")}*/
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/user-avatar.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>Edit Profile</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => changePassword()}
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/padlock.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>Change Password</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={
								styles.button
							} /*onPress={() => navigation.navigate("Login")}*/
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/class.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>My Classes</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate("Calendar")}
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/calendarSeleceted.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>My Calendar</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate("smList")}
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/open-book-selected.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>Study Materials</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={
								styles.button
							} /*onPress={() => navigation.navigate("Login")}*/
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/wallet-filled-money-tool.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>My Wallet</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => FIREBASE_AUTH.signOut()}
						>
							<View style={styles.box}>
								<Image
									source={require("../../assets/icons/logout.png")}
									style={styles.buttonImage}
								/>
							</View>
							<Text style={styles.buttonText}>Log Out</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</TutorFragment>
	);
};

export default TutorProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 80,
		paddingHorizontal: 10,
		marginBottom: 20,
		marginLeft: 5,
		marginRight: 10,
	},
	imageContainer: {
		width: 90,
		height: 90,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 10,
	},
	profileContainer: {
		flex: 1,
		marginLeft: 30,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
	},
	course: {
		fontSize: 15,
	},
	semester: {
		fontSize: 10,
	},
	buttonsContainer: {
		marginTop: 20,
		paddingHorizontal: 20,
		marginRight: 40,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		marginLeft: 10,
	},
	buttonImage: {
		width: 50,
		height: 50,
		backgroundColor: "#50CC8B",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 18,
		marginLeft: 20,
	},
	box: {
		backgroundColor: "#50CC8B",
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
	},
});
