import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
class Input extends Component {
  state = {
    message: ""
  };

  handleAddMessage = async () => {
    const { message } = this.state;
    const { author } = this.props;

    if (message.length > 0) {
      const newMessage = await this.props.addMessage({
        author,
        message
      });
    }

    this.setState({ message: "" });
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.message}
          onChangeText={message => this.setState({ message })}
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <TouchableOpacity onPress={this.handleAddMessage}>
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const MessageMutation = gql`
  mutation($author: String!, $message: String!) {
    createMessage(from: $author, message: $message) {
      id
      from
      message
    }
  }
`;

export default graphql(MessageMutation, {
  props: ({ ownProps, mutate }) => ({
    addMessage: ({ author, message }) =>
      mutate({
        variables: { author, message },
        update: ownProps.onAddMessage
      })
  })
})(Input);
