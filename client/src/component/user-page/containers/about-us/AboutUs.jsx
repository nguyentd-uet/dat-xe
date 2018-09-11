import React, { Component } from 'react'
import BoxBookCar from '../../box-book-car/BoxBookCar'

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* <div className="container"> */}
          <div className="row my-3">
            <div className="col-md-8">
              <h3>VỀ CHÚNG TÔI</h3>
              <hr style={{width: '35%', borderTop: '1px solid black', marginLeft: '0'}} />
              <img src="http://www.executivetravelandparking.com/wp-content/uploads/2013/12/Airport-Parking-1.jpg" className='my-2' alt='hero-img' width='100%'/>
              <span>CÔNG TY CP ĐẦU TƯ VÀ THƯƠNG MẠI SCAR</span><br/>
              <span>Địa chỉ: </span>
            </div>
            <div className="col-md-4">
              <BoxBookCar background='rgba(225, 225, 225, 0.4)' />
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}
