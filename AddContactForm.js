import React from "react";
import { TextInput, SafeAreaView, Button, StyleSheet } from "react-native";

import PropTypes from "prop-types";

const styles = StyleSheet.create({
  input: {
    padding: 5,
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 1
  }
});

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func
  };

  state = {
    name: "",
    phone: "",
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handlePhoneChange = phone => {
    this.setState({ phone });
  };

  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          keyboardType="numeric"
        />
        <Button title="Add Contact" />
      </SafeAreaView>
    );
  }
}
