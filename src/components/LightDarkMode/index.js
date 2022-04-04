// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {light: true}

  LightMode = () => {
    this.setState(prevState => ({light: !prevState.light}))
  }

  render() {
    const {light} = this.state
    const modeClassName = light ? 'dark-mode' : 'light-mode'
    const button = light ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading"> Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.LightMode}>
            {button}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
