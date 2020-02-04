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

// one way to pass and does the same thing as below 
//   handleSubmit = () => {
//       this.props.onSubmit({name: this.state.name, phone: this.state.phone}
//       )
//   }

//better way to handle submit which does the same thing as above
  handleSubmit = () => {
      this.props.onSubmit(this.state)
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          keyboardType="numeric"
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </SafeAreaView>
    );
  }
}
