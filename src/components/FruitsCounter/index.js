// Write your code here

import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-counter-container">
        <div className="fruit-card">
          <h1 className="main-heading">
            Bob ate <span className="count"> {mangoCount} </span> mangoes{' '}
            <span className="count"> {bananaCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <button className="fruit-button" onClick={this.onEatMango}>
                {' '}
                Eat Mango{' '}
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />
              <button className="fruit-button" onClick={this.onEatBanana}>
                {' '}
                Eat Banana{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
