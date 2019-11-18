import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/input/input.component'
class App extends React.Component {

  // call api
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({monsters:users})})
    .catch(erro => console.log(erro))
  }
  

  constructor(){
    super()
    this.state = {
      monsters  : [],
      searchField : ''
    };  
  }
  handler = (e) => this.setState({searchField : e.target.value})
  render (){
    const {monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster => {
      return  monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
  
  
    return (
      <div className="App">
        <SearchBox
        placeholder='search monster'
        handleChange={this.handler}
        />
        {/* <input 
          type='search' 
          className='App-input' 
          onChange={e => {this.setState({searchField : e.target.value})}}
        /> */}


        <CardList monsters={filteredMonsters}/>  
        {  console.log(filteredMonsters) }    
      </div>
    );
  }
  }
  

export default App;
