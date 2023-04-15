import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useMovement } from "./Behavior";

const MoveableEntity = ({ entity, touchPos, style, highlight }) => {
  const [pos, setPos, active, setActive] = useMovement(entity, touchPos);

  return (
    <TouchableOpacity
      style={{ ...styles.container, top: pos.top, left: pos.left }}
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
      ></View>
    </TouchableOpacity>
  );
};

export default MoveableEntity;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
