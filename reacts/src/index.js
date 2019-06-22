import React from './react';
import ReactDOM from './react-dom';

//jsx = javascript + xml (html) 
let ele = <h1 className="a">hellos<span>我很好</span></h1>;

let ele2 = React.createElement(
    "h1",
    { className: "a" },
    "hellos",
    React.createElement("span", null, "我很好")
);

console.log(ele2);

ReactDOM.render(ele2, document.getElementById('root'));

// jsx -> babel -> React.createElement -> vnode 虚拟dom -> ReactDOM.render -> DOM

