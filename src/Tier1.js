import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleChildClick = (e) => {
    e.stopPropagation();
    this.setState({
      childColor: getReducedColor(this.state.childColor)
    })
  }

  handleParentClick = () => {
    this.setState({
      color: getReducedColor(this.state.color)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    //
    return (
      <div className="tier1" onClick={this.handleParentClick} style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={this.handleChildClick} color={this.state.childColor} />
        <Tier2 handleChildClick={this.handleChildClick} color={this.state.childColor} />
      </div>
    )
  }
}
