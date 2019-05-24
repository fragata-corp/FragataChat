import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import Input from "../input";

const author = "Yago";

class Chat extends Component {
  componentDidMount() {
    this.props.conversation.subscribeToMore({
      document: gql`
        subscription onMessageAdded($author: String!) {
          Message(
            filter: { mutation_in: [CREATED], node: { from_not: $author } }
          ) {
            node {
              id
              from
              message
            }
          }
        }
      `,
      variables: {
        author
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data["Message"]) return prev;

        const newItem = subscriptionData.data["Message"].node;

        return { ...prev, allMessages: [...prev.allMessages, newItem] };
      }
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.scrollView.scrollToEnd({ animated: false });
    }, 0);
  }

  handleAddMessage = (proxy, { data: { createMessage } }) => {
    const data = proxy.readQuery({
      query: ConversationQuery
    });

    data.allMessages.push(createMessage);

    proxy.writeQuery({
      query: ConversationQuery,
      data
    });
  };

  renderChat = () =>
    this.props.conversation.allMessages.map(item => (
      <View
        key={item.id}
        style={[
          styles.bubble,
          item.from === author ? styles["bubble-right"] : styles["bubble-left"]
        ]}
      >
        <Text style={styles.author}>{item.from}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    ));

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.os === "ios" ? "padding" : null}
        style={styles.container}
      >
        <ScrollView
          keyboardShouldPersistTraps="never"
          ref={scrollView => (this.scrollView = scrollView)}
          contentContainerStyle={styles.conversation}
        >
          {this.props.conversation.loading ? (
            <ActivityIndicator style={styles.loading} color="#FFF" />
          ) : (
            this.renderChat()
          )}
        </ScrollView>
        <Input author={author} onAddMessage={this.handleAddMessage} />
      </KeyboardAvoidingView>
    );
  }
}

const ConversationQuery = gql`
  query {
    allMessages(orderBy: createdAt_ASC) {
      id
      from
      message
    }
  }
`;

export default graphql(ConversationQuery, {
  name: "conversation"
})(Chat);
