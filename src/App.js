import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
    text: 'Logged In',
  }

  logOut = () => {
    this.setState(prevState => {
      console.log(`Untill now you are ${prevState.text}`)
      return {isLoggedIn: false, text: 'Logged Out'}
    })
  }

  logIn = () => {
    this.setState(prevState => {
      console.log(`Untill now you are ${prevState.text}`)
      return {isLoggedIn: true, text: 'Logged In'}
    })
  }

  // If Else Rendering
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return (
  //         <button type="button" onClick={this.logOut}>
  //           Logout
  //         </button>
  //       )
  //     }
  //     return (
  //       <button type="button" onClick={this.logIn}>
  //         Login
  //       </button>
  //     )
  //   }

  render() {
    const {isLoggedIn, text} = this.state

    //  Element Rendering
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = (
    //     <button type="button" onClick={this.logOut}>
    //       Logout
    //     </button>
    //   )
    // } else {
    //   authButton = (
    //     <button type="button" onClick={this.logIn}>
    //       Login
    //     </button>
    //   )
    // }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" text={text} />
        {/* <button>Login</button>
        <button>Logout</button> */}
        {/* {this.renderAuthButton()} */}
        {/* {authButton} */}

        {/* Ternary Operator Rendering */}
        {/* {isLoggedIn ? (
          <button type="button" onClick={this.logOut}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={this.logIn}>
            Login
          </button>
        )} */}
        {isLoggedIn && (
          <button type="button" onClick={this.logOut}>
            Logout
          </button>
        )}
        {!isLoggedIn && (
          <button type="button" onClick={this.logIn}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default App
