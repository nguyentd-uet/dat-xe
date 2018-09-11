import React, { Component } from 'react'
import BoxBookCar from '../../box-book-car/BoxBookCar'
import './News.css'

const posts = [
  {
      id: '1',
      image: 'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Jaguar-XE-Portfolio-2016-%284%29.jpg',
      title: 'Jaguar Xe Porolio 3 năm tuổi bán lại ngang giá Mercedes-Benz C-Class mới'
  },
  {
      id: '2',
      image: 'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Jaguar-XE-Portfolio-2016-%284%29.jpg',
      title: 'Jaguar Xe Porolio 3 năm tuổi bán lại ngang giá Mercedes-Benz C-Class mới'
  },
  {
      id: '3',
      image: 'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Jaguar-XE-Portfolio-2016-%284%29.jpg',
      title: 'Jaguar Xe Porolio 3 năm tuổi bán lại ngang giá Mercedes-Benz C-Class mới'
  },
  {
      id: '4',
      image: 'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Jaguar-XE-Portfolio-2016-%284%29.jpg',
      title: 'Jaguar Xe Porolio 3 năm tuổi bán lại ngang giá Mercedes-Benz C-Class mới'
  }
]

export default class News extends Component {
  render() {
    return (
      <div className='news-page'>
        {/* <div className="container"> */}
          <div className="row my-3">
            <div className="col-md-8">
              <h3>TIN TỨC</h3>
              <hr style={{width: '20%', borderTop: '1px solid black', marginLeft: '0'}} />
              <h4>Jaguar XE Porfolio 3 năm tuổi bán lại ngang giá</h4>
              <img src="http://www.executivetravelandparking.com/wp-content/uploads/2013/12/Airport-Parking-1.jpg" className='my-2' alt='hero-img' width='100%'/>
              <span>CÔNG TY CP ĐẦU TƯ VÀ THƯƠNG MẠI SCAR</span><br/>
              <span>Địa chỉ: </span>
            </div>
            <div className="col-md-4">
              <BoxBookCar background='rgba(225, 225, 225, 0.4)' />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3>TIN TỨC THÊM</h3>
              <hr style={{width: '20%', borderTop: '1px solid black', marginLeft: '0'}} />

              <div className="row">
                {
                    posts && posts.map((item, index) => {
                        return (
                            <div className="card col-md-3" key={item.id}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}
