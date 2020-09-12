import React from 'react'

import { Button, BigPromo } from '@shayaqhmetov/ui-kit'
import '@shayaqhmetov/ui-kit/dist/index.css'

const App = () => {
  return (
    <div>
      <h5 className="section-name">Base</h5>
      <div className="container">
        <Button label="Submit" variant="submit"/>
        <Button label="Basic" variant="basic"/>
      </div>
      <h5 className="section-name">Ecommerce</h5>
      <div className="container">
        <BigPromo 
          title="Great Games Deserve a Great Controller" 
          tag="new arrivals" 
          subtitle="Customizable, comfortable, adaptable, and beautiful, the Rift is technology and design as remarkable as the experiences it enables" 
          actionText="Shop now"
          image="images/right-man.png"
        />
      </div>
    </div>
  )
}

export default App
