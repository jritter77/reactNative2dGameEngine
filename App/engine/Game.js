import React from "react";
import AnimatedEntity from "./AnimatedEntity";
import MoveableEntity from "./MovableEntity";
import StaticEntity from "./StaticEntity";

export const useEntities = (initialState) => {
  const [entId, setEntId] = React.useState(0);

  const entityReducer = (state, action) => {
    if (action.type == "ADD") {
      action.entity.id = entId;
      setEntId(entId + 1);
      return [...state, action.entity];
    }

    return state;
  };

  const [entities, setEntities] = React.useReducer(entityReducer, initialState);

  return [entities, setEntities];
};

const defaultPress = () => console.log("Pressed!");

export function createNewStaticEntity(
  x,
  y,
  style,
  image = null,
  onPress = defaultPress
) {
  return {
    x: x,
    y: y,
    image: image,
    comp: (props) => <StaticEntity {...props} style={style} image={image} />,
    onPress,
  };
}

export function createNewMoveableEntity(
  x,
  y,
  style,
  highlight,
  image = null,
  onPress = defaultPress
) {
  return {
    x: x,
    y: y,
    image: image,
    comp: (props) => (
      <MoveableEntity
        {...props}
        style={style}
        highlight={highlight}
        image={image}
      />
    ),
    onPress,
  };
}

export function createNewAnimatedEntity(
  x,
  y,
  style,
  highlight,
  image = null,
  onPress = defaultPress
) {
  return {
    x: x,
    y: y,
    image: image,
    comp: (props) => (
      <AnimatedEntity
        {...props}
        style={style}
        highlight={highlight}
        image={image}
      />
    ),
    onPress,
  };
}
