import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
  Pressable,
  View,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState, useRef } from "react";

export default function App() {
  const [text, setText] = useState("Nullos");

  (async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  })();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
    },
    textInput: {
      color: "white",
      fontSize:
        text.length < 8
          ? 150
          : text.length < 10
          ? 130
          : text.length < 12
          ? 110
          : text.length < 14
          ? 90
          : 70,
      fontWeight: "bold",
    },
    contentContainer: {
      flexGrow: 1,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "blue",
    },
    pressableContainer: {
      width: "100%",
      height: "100%",
    },
    textInputContainer: {
      flex: 1,
      flexGrow: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => handlePress()}
        accessible={false}
        style={styles.pressableContainer}
      >
        <View style={styles.textInputContainer}>
          <TextInput
            value={text}
            style={styles.textInput}
            onChangeText={setText}
          />
        </View>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
