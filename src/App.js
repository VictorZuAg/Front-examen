import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './content'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'


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




  render() {
    const {children} = this.props

    axios.get('http://localhost:3001/api/usuarios')
      .then(res =>{
        const usuarios = res.data;
        this.setState({usuarios})
      })

        if(this.state.usuarios.length > 0){
          return(
            <div className="App">
            {/* <input type="text" placeholder="Search" value={this.state.searchString} onChange={this.handleChange}/> */}
              {/* {this.state.usuarios.map(usuario => <User id={usuario.id} name={usuario.nombre} email={usuario.correo}/>)} */}
              {this.state.usuarios.map(usuario => <li><Link to={{pathname: usuario.id, state:{datos:usuario}}} >{usuario.nombre}</Link></li>)}
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
