import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  name: 'jay'
}

function formatName(user) {
  return user.name
}
//Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// 转化如下
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
function App() {
  if (user) {
    return <h1> hello, {formatName(user)} </h1>  //return处不加{}，函数加
  } else {
    return <div> 没有name </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);