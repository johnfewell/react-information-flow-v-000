import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  handleChildClick = (e) => {
    e.stopPropagation();
    this.setState({
      childColor: getReducedColor(this.state.childColor)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleChildClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleChildClick={this.handleChildClick} color={this.state.childColor} />
        <Tier3 handleChildClick={this.handleChildClick} color={this.state.childColor} />
      </div>
    )
  }
}
