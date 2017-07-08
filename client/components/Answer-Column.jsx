import React from 'react'

function AnswerColumn (props) {
  return (
    <div className='answer-column'>
      <div className='column-header'>
        <p>From Oldest</p>
      </div>
      <div className='column-area' />
      <div className='column-footer'>
        <p>To Newest</p>
      </div>
    </div>
  )
}

export default AnswerColumn
