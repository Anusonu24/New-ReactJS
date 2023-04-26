import React from 'react'
import Digital from './Digital/Digital'
class App extends React.Component {
render() {
  return <div>
    <nav className='=navbar navbar-dark bg-dark'>
      <a href="#" className='navbar-brand'>Employee Data</a>
    </nav>
    <hr/>
    <Digital/>

  </div>
}
 
}

export default App