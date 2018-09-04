import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
        <div>
            <div className="my-container">
                <h3>DỊCH VỤ SÂN BAY NỘI BÀI GIÁ RẺ</h3>
                <div className="row service-text">
                    <div className="col-md-6 offset-md-3">
                        Chúng tôi cung cấp dịch vụ:
                        <br/>
                        <span className='text-yellow'>
                            <i className="fas fa-star"></i> Siêu nhanh
                        </span> với xe riêng đưa đón sân bay Nội Bài
                        <br/>

                        <span className='text-yellow'>
                            <i className="fas fa-star"></i> Siêu tiện ích
                        </span> với đi chung xe
                        <br/>

                        <span className='text-yellow'>
                            <i className="fas fa-star"></i> Siêu tiết kiệm
                        </span> chỉ từ 100K với xe trung chuyển 9 chỗ
                        <br/>
                    </div>
                </div>
                <div className="row service-text">
                    {/* <div className="form-inline">
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
                    </div> */}
                    <div className="form-row" style={{width: '100%'}}>
                        <div className="col-md-3 offset-md-1">
                            {/* <input type="text" className="form-control" placeholder="Địa điểm đón"/> */}
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend3"><i className="fas fa-star"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" aria-describedby="inputGroupPrepend3"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Địa điểm trả"/>
                        </div>
                        <div className="col-md-2">
                            <input type="datetime-local" className="form-control" placeholder="Thời gian đón"/>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-primary' style={{width: '100%'}}>XEM GIÁ</button>
                        </div>
                    </div>
                </div>
                <img src="http://www.executivetravelandparking.com/wp-content/uploads/2013/12/Airport-Parking-1.jpg"/>
            </div>
        </div>
    )
  }
}
