import React from "react";
import ReactDOM from "react-dom/client";
const bird_2 = new URL("./bird_2.png", import.meta.url).href;

//JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// react element
const jsxHeading = (
    <div>
<h1 className="head" tabIndex="1">Namaste React using JSX 🚀</h1>
<img src={bird_2} alt="Namaste Logo" width={600} />
</div>
);

console.log(typeof bird_2); // should log: string
console.log("bird_2 URL:", bird_2); // shows hashed filename like /bird_2.ab1234.png

//React Component
// Class Based Component - OLD
// Functional Component - NEW 

//React Functional Component  - its a javascript function which returns a react element 
const HeadingComponent2 = () => (
    <div id="container">
<h1 className="heading">Namaste React Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);



