import React from 'react'
import Draggable from 'react-draggable'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dragging: 'false',
      position: this.props.position
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  handleStart () {
    this.setState({dragging: true})
  }

  handleDrag () {
    // placeholder
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

export default ListItem
