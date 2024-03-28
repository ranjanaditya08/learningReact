import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="root">Hello React JSX</h1>;

// React Component
// Class based component - OLD
// Functional based component - NEW
// component is a function which returns jsx

const Title = () => {
  return <h1>Hello React</h1>;
};

// Component Composition -> combining multiple components
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {Title()}
      <Title></Title>
      {jsxHeading}
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent />);

