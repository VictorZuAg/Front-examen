import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


class Compras extends Component{

    constructor(){
        super();
        // this.state = {
        //     id:"",
        //     compra:"",
        //     folio:""
        // }
       this.state = {
            persons:[]
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params

        // fetch(`http://localhost:3000/api/compras/${id}`)
        // .then(response => response.json())
        // .then(compra=>{
        //     console.log(compra[0].id)
        //     this.setState({ id: compra.id, compra: compra.compra, folio: compra.folio })
        // })
        
  }

    render(){

        const {id} = this.props.match.params 
        const {datos} = this.props.location.state
        
        axios.get(`http://localhost:3001/api/compras/${id}`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

        return(
            <div>
                <h1>{datos.nombre}</h1>
                <h1>{datos.correo}</h1>
                {/* <li>{this.props.compra}</li> */}
                { this.state.persons.map(person => <li>{person.compra} - </li>)}
            </div>
        )
    }
}

export default Compras