import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// ReactDOM.render(
//     <ActionLink />,
//      document.getElementById('root'))
class A extends React.Component{
  constructor(props){
    super(props);
    this.state={isToggle:true}
  }
  handleClick=()=>{
    this.setState(state=>({
      isToggle:!this.state.isToggle
    }))
  }
  //<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggle?'ON':'Off'}
      </button>
    )
  }
}
ReactDOM.render(
  <A/>,
document.getElementById('root')
)