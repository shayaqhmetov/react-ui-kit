import React from 'react'

import { Button } from '@shayaqhmetov/ui-kit'
import '@shayaqhmetov/ui-kit/dist/index.css'

const App = () => {
  return (
    <div>
      <h5 className="section-name">Buttons</h5>
      <div className="container">
        <Button label="Submit" variant="submit"/>
        <Button label="Basic" variant="basic"/>
      </div>
    </div>
  )
}

export default App
