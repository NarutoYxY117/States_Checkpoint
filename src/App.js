import { Component } from 'react';
import ProfilePic  from './ProfilePic.png';
import "./App.css";


class App extends Component{
  constructor(){
    super();
    this.state = {
      show : true,
      Person : { 
                fullName : "Seif",bio : "Content Creator", imgSrc: ProfilePic, profession:"Content Creator in Youtube"
              },
      count:0
    }
    this.clickHandler = this.clickHandler.bind(this);
    
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({count:+(this.state.count) + 1})
    }, 1000)
  }


  render(){
    
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={ProfilePic} alt="image peronel" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
        <h1 className='time'>{this.state.count}</h1>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>


      </div>
      );
  }
}

export default App;
