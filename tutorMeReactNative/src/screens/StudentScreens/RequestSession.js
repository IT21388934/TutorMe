import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import StudentLayout from "../../layouts/StudentLayout";
import { COLORS } from "../../constants/theme";
import { FontAwesome } from "@expo/vector-icons";

const RequestSession = () => {
  const [date, setDate] = useState();
  const [timeslot, setTimeslot] = useState("Morning");
  const [reason, setReason] = useState("");
  const [numStudents, setNumStudents] = useState(1);
  const [mode, setMode] = useState("Online");
  const [showDatePicker, setShowDatePicker] = useState(false); // State to show the date picker

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(Platform.OS === "ios");
    }
  };

  const handleFormSubmit = () => {
    // Handle form submission here, e.g., send data to the server
    console.log("Form submitted with data:", {
      date,
      timeslot,
      reason,
      numStudents,
      mode,
    });
  };

  return (
    <StudentLayout name="Requesting Session">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.tutorInfo}>
            <Image
              source={{
                uri: "https://hungercenter.org/wp-content/uploads/2015/08/EF_Johnson_Emily.jpg",
              }}
              style={styles.tutorImage}
            />
            <View style={styles.tutorDetails}>
              <Text style={styles.tutorName}>Suresh Sankalpa</Text>
              <Text style={styles.tutorFaculty}>Faculty of Computing</Text>
              <Text style={styles.tutorYear}>3rd year 2nd semester</Text>
            </View>
          </View>
          <Text style={styles.className}>Object Oriented Programming</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>Price per session: Rs. 1000.00</Text>
          </View>
          <View style={styles.formContainer}>
            <Text>Date</Text>
            <View style={styles.dateInputField}>
              <TextInput
                style={styles.dateInput}
                placeholder="Select a date"
                placeholderTextColor={COLORS.darkGray}
                value={date ? date.toLocaleDateString() : ""}
                editable={false}
              />
              <View>
                <FontAwesome
                  name="calendar"
                  size={24}
                  color="black"
                  style={styles.dateInputFieldIcon}
                  onPress={() => setShowDatePicker(true)}
                />
                {showDatePicker && (
                  <DateTimePicker
                    value={date || new Date()}
                    minimumDate={new Date()} // Disable past dates
                    mode="date"
                    onChange={handleDateChange}
                  />
                )}
              </View>
            </View>
            {date && (
              <>
                <Text>Timeslot</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={timeslot}
                    onValueChange={(itemValue) => setTimeslot(itemValue)}
                  >
                    <Picker.Item label="Morning" value="Morning" />
                    <Picker.Item label="Afternoon" value="Afternoon" />
                    <Picker.Item label="Evening" value="Evening" />
                  </Picker>
                </View>
              </>
            )}
            <Text>Reason</Text>
            <TextInput
              value={reason}
              onChangeText={(text) => setReason(text)}
              style={styles.textarea}
              multiline={true}
              numberOfLines={4}
            />
            <View style={styles.formBottom}>
              <View style={styles.countInputContainer}>
                <Text>Number of students</Text>
                <View style={styles.countInputField}>
                  <FontAwesome
                    name="minus-circle"
                    size={26}
                    color={COLORS.green}
                    style={styles.countInputFieldIcon}
                    onPress={() => {
                      if (numStudents > 1) {
                        setNumStudents(numStudents - 1);
                      }
                    }}
                  />
                  <TextInput
                    value={numStudents.toString()}
                    onChangeText={(text) => {
                      const parsedNum = parseInt(text, 10);
                      if (!isNaN(parsedNum)) {
                        setNumStudents(Math.max(1, parsedNum));
                      }
                    }}
                    keyboardType="numeric"
                    style={styles.countInput}
                  />
                  <FontAwesome
                    name="plus-circle"
                    size={26}
                    color={COLORS.green}
                    style={styles.countInputFieldIcon}
                    onPress={() => setNumStudents(numStudents + 1)}
                  />
                </View>
              </View>
              <View style={styles.pickerInputContainer}>
                <Text>Mode</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={mode}
                    onValueChange={(itemValue) => setMode(itemValue)}
                  >
                    <Picker.Item label="Online" value="Online" />
                    <Picker.Item label="In-person" value="In-person" />
                  </Picker>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleFormSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </StudentLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  tutorInfo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tutorImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  tutorDetails: {
    alignItems: "flex-end",
  },
  tutorName: {
    textAlign: "right",
    fontSize: 24,
    fontWeight: "500",
  },
  tutorFaculty: {
    fontSize: 16,
    marginVertical: 4,
  },
  tutorYear: {
    fontSize: 14,
  },
  className: {
    marginTop: 30,
    fontWeight: "600",
    fontSize: 24,
  },
  priceContainer: {
    marginTop: 20,
    backgroundColor: COLORS.orange,
    borderRadius: 8,
    padding: 10,
  },
  price: {
    textAlign: "center",
    color: COLORS.white,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderColor: COLORS.darkGray,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  textarea: {
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  dateInputField: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  dateInput: {
    flex: 1,
    color: COLORS.darkGray,
    padding: 10,
  },
  dateInputFieldIcon: {
    width: 25,
    height: 24,
    marginRight: 20,
    color: COLORS.darkGray,
  },
  countInputContainer: {
    flex: 5,
    marginRight: 30,
  },
  pickerInputContainer: {
    flex: 6,
  },
  formBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  countInputField: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  countInputFieldIcon: {
    // borderRadius: 25,
    // backgroundColor: COLORS.white,
    padding: 6,
  },
  countInput: {
    flex: 1,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    marginHorizontal: 6,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: COLORS.green,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default RequestSession;
