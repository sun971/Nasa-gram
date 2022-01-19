import './App.css';
import React, {Component} from 'react';
import Main from './components/Main';
import Date from './components/Date';


class App extends Component {

  state ={
    searchDate: "",
    photo: "",
    date: "",
    count: 0
  };

  changeDate = e => {
    e.preventDefault();
    let givenDate = e.target[0].value;

    this.setState({ searchDate: givenDate });
    this.getPhoto(givenDate);
    
  }
  increase =() => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount 
    })
  }

  componentDidMount() {
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
        <h1>Spacestagram</h1>
        <Date
        changeDate={this.changeDate}/> 
        <Main 
        photo={this.state.photo}/>
        <div className='heart'>
            <button onClick={this.increase}>❤️ Likes: {this.state.count}</button>
        </div>
        </div>
    )
  }
}

export default App;
