import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
        <div>
            <div class="my-container">
                <h3>DỊCH VỤ SÂN BAY NỘI BÀI GIÁ RẺ</h3>
                <div className="row service-text">
                    <div className="col-md-6 offset-md-3">
                        Chúng tôi cung cấp dịch vụ:
                        <br/>
                        <span class='text-yellow'>
                            <i className="fas fa-star"></i> Siêu nhanh
                        </span> với xe riêng đưa đón sân bay Nội Bài
                        <br/>

                        <span class='text-yellow'>
                            <i className="fas fa-star"></i> Siêu tiện ích
                        </span> với đi chung xe
                        <br/>

                        <span class='text-yellow'>
                            <i className="fas fa-star"></i> Siêu tiết kiệm
                        </span> chỉ từ 100K với xe trung chuyển 9 chỗ
                        <br/>
                    </div>
                </div>
                <div className="row service-text">
                    <div className="form-inline">
                        <div className="form-group" style={{width: '30%'}}>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className="form-group" style={{width: '30%'}}>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className="form-group" style={{width: '20%'}}>
                            <input type="text" className='form-control'/>
                        </div>
                        <button className='btn btn-primary'>XEM GIÁ</button>
                    </div>
                </div>
                <img src="http://www.executivetravelandparking.com/wp-content/uploads/2013/12/Airport-Parking-1.jpg"/>
            </div>
        </div>
    )
  }
}
