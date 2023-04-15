import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

const GameView = ({ entites }) => {
  const [touchPos, setTouchPos] = React.useState({ x: 0, y: 0 });

  const handleTouch = (e) => {
    setTouchPos({ x: e.nativeEvent.pageX, y: e.nativeEvent.pageY });
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.container}>
        {entites.map((e, i) => (
          <e.comp key={i} entity={e} touchPos={touchPos} />
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GameView;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
});
