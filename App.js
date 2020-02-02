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

const Row = props => (
  <View>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

export default class App extends React.Component {
  state = {
    showContacts: false
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };
  render() {
    return (
        <View style={styles.container}>
          <Button
            title="toggle contacts"
            onPress={this.toggleContacts}
          ></Button>
          <ScrollView>
            {contacts.map(contact => (
              <Row key={contact.key} name={contact.name} phone={contact.phone}/>
            ))}
          </ScrollView>
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
