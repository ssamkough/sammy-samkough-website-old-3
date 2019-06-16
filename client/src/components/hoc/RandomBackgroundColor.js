import React from "react";

const RandomBackgroundColor = WrappedComponent => {
  const colors = ["red", "pink", "blue"];
  const randomColor = colors[Math.floor(Math.random() * 2)];
  const className = randomColor;

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

export default RandomBackgroundColor;
