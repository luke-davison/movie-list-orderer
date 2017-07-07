import React from 'react'
import ListItem from './List-Item'

import data from '../../example-data.js'

function App (props) {
  return (
    <div className='list-container'>
      {data.map((movie, i) => <ListItem key={i} position={i} {...movie} />)}
    </div>
  )
}

export default App
