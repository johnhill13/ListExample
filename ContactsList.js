import React from "react";
import { SectionList, Text } from "react-native";
import PropTypes from 'prop-types';

import Row from './Row'

 // this is what it looks like at this poin with renderItem - item: { name: String, phone: String }
 const renderItem = obj => <Row {...obj.item} />;
 // renderItem is the same as this--- renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone}

 // this refers to the section we are passing in SectionList, passed as an obj accessed as obj.section
 const renderSectionHeader = obj => <Text>{obj.section.title}</Text>;

const ContactsList = props => (
  <SectionList
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    sections={[
      {
        title: "A",
        data: props.contacts
      }
    ]}
  />
);

ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}
export default ContactsList;
