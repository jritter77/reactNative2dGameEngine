import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useMovement } from "./Behavior";

const StaticEntity = ({ entity, style, image }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, top: entity.y, left: entity.x }}
      onPress={entity.onPress}
    >
      <View style={style}>
        {image && (
          <Image style={{ width: "100%", height: "100%" }} source={image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default StaticEntity;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
