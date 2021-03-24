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

const pinOnFocus = () => (
  <div style={{
    textAlign: 'center',
    width: 60,
    height: 60,
    marginRight: 15,
    background: 'blue',
  }}
  />
);

const pinOnFilled: React.FC = ({ children }) => (
  <div style={{
    textAlign: 'center',
    width: 60,
    height: 60,
    marginRight: 15,
    background: 'green',
  }}
  >
    {children}

  </div>
);

const PinText: React.FC = ({ children }) => (
  <p style={{
    color: 'black',
    fontSize: '19px',
    fontWeight: 800,
  }}
  >
    {children}

  </p>

);


const App = () => {
  return (
  <PinInput
    length={4}
    onChangePin={(value) => console.log(value)}
    showValues
    pinText={PinText}
    pinComponent={pin}
    pinComponentOnFill={pinOnFilled}
    pinComponentOnFocus={pinOnFocus}
    direction="row"
  />
  )
}

export default App
