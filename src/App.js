import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './content'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const User = ( props ) =>(
  <li><Link to={{pathname: props.id, state:{datos:props}}} >{props.name}</Link></li>
)

class App extends Component {
  static PropTypes = {
    children: PropTypes.object.isRequired
  }
  constructor(){
    super()
    this.state = {
      usuarios:[]
    }

  }

  componentWillMount(){
    fetch('http://localhost:3000/api/usuarios')
      .then(response => response.json())
      .then(usuarios=>{
        usuarios.forEach(usuario => {
          let datos = {
            id : usuario.id,
            nombre : usuario.nombre,
            correo : usuario.correo
          }
          this.setState({ usuarios: this.state.usuarios.concat([datos])})
        })
      })
  }



  render() {
    const {children} = this.props

        if(this.state.usuarios.length > 0){
          return(
            <div className="App">
            <input type="text" placeholder="Search" value={this.state.searchString} onChange={this.handleChange}/>
              {this.state.usuarios.map(usuario => <User id={usuario.id} name={usuario.nombre} email={usuario.correo}/>)}
              
              <Content body={children}/>

            </div>
          )
        }else{
          return(
             <div className="App">
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to React</h1>
           </header>
           <p className="App-intro">
             To get started, edit <code>src/App.js</code> and save to reload.
           </p>
         </div>
          )
        }
  }
  
}

export default App;
