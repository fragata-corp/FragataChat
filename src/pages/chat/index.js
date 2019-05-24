import React from "react";

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import Input from "../input";

const Chat = () => (
  <KeyboardAvoidingView
    behavior={Platform.os === "ios" ? "padding" : null}
    keyboardShouldPersistTraps="never"
    style={styles.container}
  >
    <ScrollView contentContainerStyle={styles.conversation}>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-right"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-right"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-right"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-right"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
      <View style={[styles.bubble, styles["bubble-left"]]}>
        <Text style={styles.author}>Yago</Text>
        <Text style={styles.message}>
          Olá, essa é apenas uma mensagem de teste
        </Text>
      </View>
    </ScrollView>
    <Input />
  </KeyboardAvoidingView>
);

export default Chat;
