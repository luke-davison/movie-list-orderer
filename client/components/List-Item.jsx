import React from 'react'
import Draggable from 'react-draggable'
import {connect} from 'react-redux'

import {itemDragged} from '../actions'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dragging: 'false',
      position: this.props.position,
      moving: false
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  handleStart () {
    this.setState({dragging: true})
  }

  handleDrag (e) {
    this.props.itemDragged(this.props.itemId, e.clientX, e.clientY)
  }

  handleStop () {
    this.setState({dragging: false})
  }

  render () {
    return (
      <Draggable
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop} >
        <div className='list-item'>
          {this.props.title}
        </div>
      </Draggable>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    itemDragged: (itemId, x, y) => dispatch(itemDragged(itemId, x, y))
  }
}

export default connect(null, mapDispatchToProps)(ListItem)
