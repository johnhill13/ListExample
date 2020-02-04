import React from "react";
import {
  Button,
  FlatList,
  SectionList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from "react-native";
import { Constants } from "expo";

import contacts, { compareNames } from "./contacts";
import Row from "./Row";
import ContactsList from "./ContactsList";
import AddContactForm from "./AddContactForm";

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false, contacts: [...prevState.contacts, newContact].sort(compareNames)
    }));
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }));
  };

  render() {
    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button title="toggle contacts" onPress={this.toggleContacts} />
          <Button title="add contact" onPress={this.toggleForm} />
        </View>
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
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
