import React from 'react'
import Body from './Components/Body Component/Body'
import { Provider } from 'react-redux'
import appStore from './utils/Store/appStore'


const App = () => {
  return (
    <div >
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  )
}

export default App
