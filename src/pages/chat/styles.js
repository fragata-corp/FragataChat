import { StyleSheet, Platform, Dimensions, StatusBar } from "react-native";

StatusBar.setBarStyle("light-content");
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#295073",
    ...Platform.select({
      ios: { paddingTop: 20 }
    })
  },

  conversation: {
    padding: 10
  },

  bubble: {
    padding: 6,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    marginTop: 10,
    maxWidth: width - 60
  },
  "bubble-right": {
    alignSelf: "flex-end",
    backgroundColor: "#02a5c1"
  },
  "bubble-left": {
    alignSelf: "flex-start"
  },

  author: {
    fontWeight: "bold",
    marginBottom: 3,
    color: "#333"
  },
  message: {
    fontSize: 16,
    color: "#333"
  },
  loading: {
    marginTop: 20
  }
});

export default styles;
