/** 
<div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am H1 tag from child2</h1>
        <h2>I am H2 tag from child2</h2>
    </div>
</div>
*/

const parent = React.createElement(
"div",
{ id: "parent" },
[React.createElement(
    "div", 
    { id: "child" },[
        React.createElement("h1", {}, "I am an H1 tag"), 
        React.createElement("h2", {}, "I am an H2 tag"),
    ]), 
React.createElement(
    "div", 
    { id: "child2" },[
        React.createElement("h1", {}, "I am an H1 tag from child2"), 
        React.createElement("h2", {}, "I am an H2 tag from child2"),
    ])
]);



console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);