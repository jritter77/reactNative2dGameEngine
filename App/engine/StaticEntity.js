import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useMovement } from "./Behavior";

const StaticEntity = ({ entity, style }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, top: entity.y, left: entity.x }}
      onPress={entity.onPress}
    >
      <View style={style}></View>
    </TouchableOpacity>
  );
};

export default StaticEntity;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
