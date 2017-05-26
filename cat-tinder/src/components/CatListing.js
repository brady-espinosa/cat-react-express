import React, { Component } from 'react';



class CatListing extends Component {
  render(){
    return(
      <div className="col-xs-3">
        <ul>
          <li>
            Color: {this.props.cat.color}
          </li>
          <li>
            Breed: {this.props.cat.breed}
          </li>
          <li>
            Gender: {this.props.cat.gender}
          </li>
          <li>
            Habitat: {this.props.cat.habitat}
          </li>
          <li>
            Personality: {this.props.cat.personality}
          </li>
          <li>
            Age: {this.props.cat.age}
          </li>
        </ul>
      </div>
    )
  }
}

export default CatListing
