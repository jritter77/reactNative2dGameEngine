import React from "react";

export const useMovement = (entity, touchPos) => {
  const [active, setActive] = React.useState(false);

  const [pos, setPos] = React.useState({ top: entity.x, left: entity.y });

  React.useEffect(() => {
    if (active) {
      setPos({ top: touchPos.y, left: touchPos.x });
    }
  }, [touchPos]);

  return [pos, setPos, active, setActive];
};
