import React from "react";

import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
const Chat = () => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.conversation}>
      <View style={styles.bubble}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
    </ScrollView>
  </View>
);

export default Chat;
