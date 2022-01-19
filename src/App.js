import './App.css';
import React, {Component} from 'react';
import Main from './components/Main';
import Date from './components/Date';
import Animate from './components/Animate'

class App extends Component {

  state ={
    searchDate: "",
    photo: "",
    date: "",
    count:0,
    current:false
  };

  changeDate = e => {
    e.preventDefault();
    let givenDate = e.target[0].value;

    this.setState({ searchDate: givenDate });
    this.getPhoto(givenDate);
    
  }
  increase =() => {
    if(!this.state.current){
    this.setState((prev) => {
      return{
        count: prev.count +1,
        current: true 
      };
    });
  } else{
    this.setState((prev) => {
      return{
        count: prev.count-1,
        current: false
      };
    });
  }
}
  componentDidMount() {
    window.scrollTo(0,0)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=WmOjFqahyE4g2ZqH1msZLeuaGROmYsbubuQnzwIP`)
    .then(res=> res.json())
    .then(json => this.setState({ photo: json}))
    .then(json => this.setState({date: json}));
  }

  getPhoto = searchDate => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${searchDate}&api_key=58oXjtN6gnphNMkCExZ8VSyl6effQwda2CppFiYV`)
    .then(response => response.json())
    .then(photoData => this.setState({ photo: photoData}));
  };
  render() {
    return (
      <div>
        <Animate/>
        {/* <h1 class="title">Spacestagram</h1> */}
        <Date
        changeDate={this.changeDate}/> 
        <Main 
        photo={this.state.photo}
        />
      <div className='btn'> 
        <button5 onClick={this.increase}> ❤️ Like: {this.state.count}</button5>
      </div>
      </div>
    )
  }
}

export default App;
