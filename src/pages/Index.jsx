import React, { useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

const Index = () => {
  const [rectPosition, setRectPosition] = useState({ x: 50, y: 50 });
  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });

  const handleDragEnd = (e, shape) => {
    const { x, y } = e.target.position();
    if (shape === "rect") {
      setRectPosition({ x, y });
    } else if (shape === "circle") {
      setCirclePosition({ x, y });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl mb-4">Interactive Canvas with React Konva</h1>
      <Stage width={window.innerWidth * 0.8} height={window.innerHeight * 0.6}>
        <Layer>
          <Rect
            x={rectPosition.x}
            y={rectPosition.y}
            width={100}
            height={100}
            fill="red"
            draggable
            onDragEnd={(e) => handleDragEnd(e, "rect")}
          />
          <Circle
            x={circlePosition.x}
            y={circlePosition.y}
            radius={50}
            fill="blue"
            draggable
            onDragEnd={(e) => handleDragEnd(e, "circle")}
          />
        </Layer>
      </Stage>
      <div className="mt-4">
        <p>Rectangle Position: {`x: ${rectPosition.x}, y: ${rectPosition.y}`}</p>
        <p>Circle Position: {`x: ${circlePosition.x}, y: ${circlePosition.y}`}</p>
      </div>
    </div>
  );
};

export default Index;