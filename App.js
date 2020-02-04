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

import contacts, { compareNames } from "./contacts";
import Row from "./Row";

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts.sort(compareNames),
    }))
  }

  renderItem = obj => <Row {...(obj.item)} />

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="toggle contacts"
            onPress={this.toggleContacts}
          ></Button>
          <Button
            title="sort contacts"
            onPress={this.sort}
          ></Button>
        </View>
        {this.state.showContacts && (
          <FlatList renderItem={this.renderItem} data={this.state.contacts} />
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
