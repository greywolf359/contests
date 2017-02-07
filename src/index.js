//src/index.js
//now the top level react component
import React from 'react';
import reactDOM from 'react-dom';
import App from './Components/App'




reactDOM.render(<App />, document.getElementById("root"));
//contests = {[]}

//demo of unmounting
/*
setTimeout(()=>{
	reactDOM.render(<h2>...</h2>, document.getElementById("root"));
},5000)
*/