import React, { Component } from "react";
import { View, StyleSheet, ListView, Button } from "react-native";

export default class Location extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(["Pattaya"])
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFE0E9" }}>
        <ListView
          dataSource={this.state.dataSource}
          style={styles.container}
          renderRow={rowData => (
            <View>
              <Button
                title={rowData}
                color="ิblack"
                onPress={() => this.props.navigation.navigate("Aqi")}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    margin: 10
  },
  container: {
    flex: 1,
    marginTop: 20
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});
