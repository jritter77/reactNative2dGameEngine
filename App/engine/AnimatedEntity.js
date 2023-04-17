import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useMovement } from "./Behavior";

const AnimatedEntity = ({ entity, touchPos, style, highlight, image }) => {
  const [pos, setPos, active, setActive] = useMovement(entity, touchPos);

  const xPos = React.useRef(new Animated.Value(100)).current;
  const yPos = React.useRef(new Animated.Value(100)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(xPos, {
        toValue: pos.left,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(yPos, {
        toValue: pos.top,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [pos]);

  return (
    <Animated.View style={{ ...styles.container, top: yPos, left: xPos }}>
      <TouchableOpacity
        onPress={() => {
          setActive(!active);
          entity.onPress();
        }}
      >
        <View
          style={{
            ...style,
            backgroundColor: active ? highlight : style.backgroundColor,
          }}
        >
          {image && (
            <Image style={{ width: "100%", height: "100%" }} source={image} />
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedEntity;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
