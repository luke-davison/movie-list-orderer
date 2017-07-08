import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'
import {connect} from 'react-redux'

import {closeInstructions} from '../actions'

function Instructions (props) {
  return (
    <ModalContainer onClose={props.closeInstructions}>
      <ModalDialog onClose={props.closeInstructions}>
        <h2>Instructions</h2>
        <p>Your goal is to arrange the list of movies in order from oldest to newest</p>
      </ModalDialog>
    </ModalContainer>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    closeInstructions: () => dispatch(closeInstructions())
  }
}

export default connect(null, mapDispatchToProps)(Instructions)
