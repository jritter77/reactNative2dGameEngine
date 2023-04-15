import AnimatedEntity from "./AnimatedEntity";
import MoveableEntity from "./MovableEntity";
import StaticEntity from "./StaticEntity";

const defaultPress = () => console.log("Pressed!");

export function createNewStaticEntity(x, y, style, onPress = defaultPress) {
  return {
    x: x,
    y: y,
    comp: (props) => <StaticEntity {...props} style={style} />,
    onPress,
  };
}

export function createNewMoveableEntity(
  x,
  y,
  style,
  highlight,
  onPress = defaultPress
) {
  return {
    x: x,
    y: y,
    comp: (props) => (
      <MoveableEntity {...props} style={style} highlight={highlight} />
    ),
    onPress,
  };
}

export function createNewAnimatedEntity(
  x,
  y,
  style,
  highlight,
  onPress = defaultPress
) {
  return {
    x: x,
    y: y,
    comp: (props) => (
      <AnimatedEntity {...props} style={style} highlight={highlight} />
    ),
    onPress,
  };
}
