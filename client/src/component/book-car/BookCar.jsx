import React, { Component } from 'react'
import './BookCar.css'
import Step1 from './Step1/Step1'
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'

export default class BookCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 3
    }
    this.onChangeStep = this.onChangeStep.bind(this)
    this.onClickStep = this.onClickStep.bind(this)
  }
  
  onChangeStep(step) {
    this.setState({step})
  }

  onClickStep(value) {
    const {step} = this.state
    if (step > value) {
      this.setState({step: value})
    }
  }

  render() {
    const {step} = this.state
    let panel
    if (step === 1) {
      panel = <Step1 onChangeStep={this.onChangeStep}/>
    } else if (step === 2) {
      panel = <Step2 onChangeStep={this.onChangeStep}/>
    } else {
      panel = <Step3/>
    }
    return (
      <div id='book-car'>
        <div className="container">
          <div id="smartwizard" className="sw-main sw-theme-arrows py-4">
            <ul className="nav nav-tabs step-anchor">
              <li className={"nav-item " + (step === 1 ? 'active' : '') + (step > 1 ? 'done' : '')} onClick={() => this.onClickStep(1)}>
                <a href="#" className="nav-link"><b>Bước 1<br/><small>Đặt xe</small></b></a>
              </li>
              <li className={"nav-item " + (step === 2 ? 'active' : '') + (step > 2 ? 'done' : '')} onClick={() => this.onClickStep(2)}>
                <a href="#" className="nav-link">Bước 2<br/><small>Thông tin cá nhân</small></a>
              </li>
              <li className={"nav-item " + (step === 3 ? 'active' : '')}>
                <a href="#" className="nav-link">Bước 3<br/><small>Hoàn tất</small></a>
              </li>
            </ul>
          </div>
          {panel}
        </div>
      </div>
    )
  }
}
