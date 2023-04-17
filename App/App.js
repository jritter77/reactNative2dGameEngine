import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import GameView from "./engine/GameView";
import {
  createNewAnimatedEntity,
  createNewMoveableEntity,
  createNewStaticEntity,
  useEntities,
} from "./engine/Game";

export default function App() {
  const [entities, setEntities] = useEntities([]);

  const myEnt1 = createNewMoveableEntity(0, 0, styles.entity1, "yellow");
  const myEnt2 = createNewAnimatedEntity(
    100,
    100,
    styles.entity2,
    "pink",
    require("./assets/test.png")
  );

  React.useEffect(() => {
    setEntities({
      type: "ADD",
      entity: myEnt1,
    });
    setEntities({
      type: "ADD",
      entity: myEnt2,
    });
  }, []);

  console.log(entities);

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
