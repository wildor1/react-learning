import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
    />
  );
}

function Comment(props) {
  return (
    <div>
      <Avatar user={props.author} />
      <div>
        {props.author.name}
      </div>
    </div>
  );
}
//React 会将以小写字母开头的组件视为原生 DOM 标签
//props一般不可更改
ReactDOM.render(
  <Comment author={{name:'jay', avatarUrl:'baidu.com'}} />,
  document.getElementById('root')
);