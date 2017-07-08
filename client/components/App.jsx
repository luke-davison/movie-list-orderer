import React from 'react'
import {connect} from 'react-redux'

import AnswerColumn from './Answer-Column'
import Instructions from './Instructions'
import ListItem from './List-Item'
import MoviesColumn from './Movies-Column'
import NavColumn from './Nav-Column'

function App (props) {
  return (
    <div className='app-container'>
      {props.instructionsOpen && <Instructions /> }
      <MoviesColumn />
      <AnswerColumn />
      <NavColumn />
      {props.movieList.map((movie, i) => {
        return <ListItem key={i} itemId={i} />
      })}
    </div>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    instructionsOpen: state.instructionsOpen,
    movieList: state.movieList
  }
}

export default connect(mapStateToProps)(App)
