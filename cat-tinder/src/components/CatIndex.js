import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CatListing from './CatListing'

class CatIndex extends Component {
    constructor(props){
      super(props)
      this.state = {
        cats: []
      }
    }
    componentWillMount(){
    let catIndexState = this
    const params = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
    fetch("http://localhost:4000/cats", params).then(function(response){
      if(response.status === 200){
        response.json().then(function(body){
          catIndexState.setState({
            cats: body.cats
          })
        })
      }
    }).catch(function(error){
      catIndexState.setState({
        message: 'there was an error: ' + error.message
      })
    })
  }
    renderCat(){
      let catRender = []
      for(var i=0;i<this.state.cats.length;i++){
        let catKey = "cat-" + i
        catRender.push(
          <CatListing key={catKey} cat={this.state.cats[i]}></CatListing>
        )
      }
      return catRender
    }
  render(){
    return(
      <div>
        <div className="row">
          <h2>Cat List</h2>
          <div className="pull-right">
            <Link to='/add'>New Cat</Link>
          </div>
        </div>
        <div className="cat-list row">
          {this.renderCat()}
        </div>
      </div>
    )
  }
}

export default CatIndex;
