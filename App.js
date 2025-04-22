const parent = React.createElement("div",
    { id: "parent"},
    React.createElement("div",{id: "child"}, 
        [React.createElement("h1",{},"i m java",
            React.createElement("h2",{},"i m java2"))]));



    const root = ReactDOM.createRoot(document.getElementById("root"));
    console.log(parent)
    root.render(parent); 