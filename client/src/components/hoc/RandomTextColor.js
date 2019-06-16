import React from "react";

const RandomTextColor = WrappedComponent => {
  const colors = ["red", "pink", "blue"];
  const randomColor = colors[Math.floor(Math.random() * 2)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div>
        <div className={className}>
          <WrappedComponent />
        </div>
      </div>
    );
  };
};

export default RandomTextColor;
