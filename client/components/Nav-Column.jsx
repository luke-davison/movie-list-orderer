import React from 'react'
import {connect} from 'react-redux'

import {checkSolution} from '../actions'

function NavColumn (props) {
  return (
    <div className='nav-column'>
      <div className='column-header'>
        <p>Instructions</p>
      </div>
      <div className='column-area'>
        <button type='button' className='check-answer-button' value='Check Solution' onClick={props.checkSolution} />
      </div>
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    checkSolution: () => dispatch(checkSolution())
  }
}

export default connect(null, mapDispatchToProps)(NavColumn)
