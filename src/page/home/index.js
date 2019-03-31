import React, { Component } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Check Air"
  });

  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFE0E9" }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text style={styles.textConfirm}>90</Text>
              <Text style={styles.textConfirm2}>Pattaya, Thailand</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={styles.buttonConfirm}>
                  <Text style={styles.textButtonConfirm}>confirm</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View style={styles.imageContainer}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../img/checkIcon.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textLine}>Connected: None</Text>
          <Text style={styles.textLine}>Location: Pattaya</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLine}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text style={styles.connectText}>Connected</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonLine2}>
            <Button
              title="Find Location"
              color="white"
              onPress={() => this.props.navigation.navigate("Find")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 50
  },
  buttonContainer: {
    marginTop: 20
  },
  textLine: {
    textAlign: "center",
    margin: 10,
    fontSize: 20,
    color: "#17D5D2"
  },
  buttonLine: {
    backgroundColor: "#4E1FC4",
    borderColor: "#4E1FC4",
    borderWidth: 7,
    borderRadius: 15,
    margin: 10
  },
  buttonLine2: {
    backgroundColor: "#4E1FC4",
    borderColor: "#4E1FC4",
    borderWidth: 1,
    borderRadius: 15,
    margin: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  connectText: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  textConfirm: {
    fontSize: 150,
    color: "#4E1FC4",
    textAlign: "center",
    marginTop: 150
  },
  textConfirm2: {
    fontSize: 30,
    color: "#17D5D2",
    textAlign: "center",
    marginTop: 10
  },
  buttonConfirm: {
    backgroundColor: "#4E1FC4",
    borderColor: "#4E1FC4",
    borderWidth: 7,
    borderRadius: 15,
    margin: 10
  },
  textButtonConfirm: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  }
});
