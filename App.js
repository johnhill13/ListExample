import React from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from "react-native";
import { Constants } from "expo";

import contacts from "./contacts";
import Row from "./Row";

export default class App extends React.Component {
  state = {
    showContacts: false
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  renderItem = (obj) => <Row {...(obj.item)} />

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="toggle contacts"
            onPress={this.toggleContacts}
          ></Button>
        </View>
        {this.state.showContacts && (
          <FlatList
            renderItem={obj => <Row {...(obj.item)} />}
            data={contacts}
        />
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
