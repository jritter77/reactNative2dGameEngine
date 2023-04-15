import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import GameView from "./engine/GameView";
import {
  createNewAnimatedEntity,
  createNewMoveableEntity,
  createNewStaticEntity,
} from "./engine/Game";

export default function App() {
  const [entities, setEntities] = React.useState([
    createNewMoveableEntity(0, 0, styles.entity1, "yellow"),
    createNewAnimatedEntity(100, 100, styles.entity2, "pink"),
    createNewStaticEntity(148, 148, styles.entity3, () => {
      setEntities((oldstate) => [
        ...oldstate,
        createNewMoveableEntity(200, 200, styles.entity2, "pink"),
      ]);
    }),
  ]);

  return <GameView entites={entities} />;
}

const styles = StyleSheet.create({
  entity1: {
    width: 64,
    height: 64,
    backgroundColor: "red",
  },
  entity2: {
    width: 32,
    height: 32,
    backgroundColor: "blue",
  },
  entity3: {
    width: 64,
    height: 64,
    backgroundColor: "black",
  },
});
