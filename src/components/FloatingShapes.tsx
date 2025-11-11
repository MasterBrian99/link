import React, { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "circle" | "square" | "triangle";
  color: string;
  size: number;
  left: number;
  animationDuration: number;
  delay: number;
}

const FloatingShapes: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = ["#FFD23F", "#FF6B9D", "#4ECDC4", "#95E77E", "#A663CC"];
    const types: ("circle" | "square" | "triangle")[] = [
      "circle",
      "square",
      "triangle",
    ];

    const generatedShapes: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 30 + 20,
      left: Math.random() * 100,
      animationDuration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    setShapes(generatedShapes);
  }, []);

  const renderShape = (shape: Shape) => {
    const baseStyle: React.CSSProperties = {
      position: "fixed",
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      backgroundColor: shape.color,
      border: "2px solid #000",
      left: `${shape.left}%`,
      bottom: "-50px",
      opacity: 0.7,
      zIndex: -1,
      animation: `float ${shape.animationDuration}s linear infinite`,
      animationDelay: `${shape.delay}s`,
    };

    switch (shape.type) {
      case "circle":
        return (
          <div key={shape.id} style={{ ...baseStyle, borderRadius: "50%" }} />
        );
      case "square":
        return <div key={shape.id} style={baseStyle} />;
      case "triangle":
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
      {shapes.map(renderShape)}
    </>
  );
};

export default FloatingShapes;
