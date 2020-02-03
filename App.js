import React from "react";
import {
  Button,
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
  render() {
    if (this.state.showContacts) {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <Button
              title="toggle contacts"
              onPress={this.toggleContacts}
            ></Button>
          </View>
          <ScrollView>
            {contacts.map(contact => (
              <Row
                key={contact.key}
                name={contact.name}
                phone={contact.phone}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts}></Button>
      </View>
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
