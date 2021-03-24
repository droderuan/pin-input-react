import React from 'react'

import { PinInput } from 'pin-input-react'
import 'pin-input-react/dist/index.css'

const pin = () => (
  <div style={{
    textAlign: 'center',
    width: 60,
    height: 60,
    marginRight: 15,
    background: 'red',
  }}
  />
);

const App = () => {
  return <PinInput direction="row" length={4}  pinComponent={pin} onChangePin={value => console.log(value)} />
}

export default App
