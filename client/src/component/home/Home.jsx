import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {

    onClickXemGiaBtn() {
        this.props.history.push('/dat-xe');
    }
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
                        <div className="form-row" style={{width: '100%'}}>
                            <div className="col-md-3" id='dia-chi-don'>
                                <div className="form-group">
                                    <span className="fas fa-map-marker-alt form-control-icon text-primary"></span>
                                    <input type="text" className="form-control" placeholder="Địa chỉ đón"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <span className="fas fa-map-marker-alt form-control-icon text-danger"></span>
                                    <input type="text" className="form-control" placeholder="Địa chỉ trả"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <span className="fas fa-calendar-alt form-control-icon text-info"></span>
                                    <input type="datetime-local" className="form-control" placeholder="Thời gian đón"/>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className='btn btn-xem-gia text-light' onClick={this.onClickXemGiaBtn.bind(this)}>XEM GIÁ</button>
                            </div>
                        </div>
                    </div>
                    <img src="http://www.executivetravelandparking.com/wp-content/uploads/2013/12/Airport-Parking-1.jpg" alt='hero-img'/>
                </div>

                <div className='container my-4'>
                    <h3 className='text-center mb-4'>BẢNG GIÁ THAM KHẢO</h3>

                    <table className="table table-bordered text-center mb-5">
                        <thead>
                            <tr className='text-light' style={{backgroundColor: '#155dab'}}>
                                <th scope="col">LOẠI XE</th>
                                <th scope="col">HÀ NỘI - NỘI BÀI</th>
                                <th scope="col">NỘI BÀI - HÀ NỘI</th>
                                <th scope='col'>KHỨ HỒI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Xe 04 chỗ</td>
                                <td>170.000 VNĐ</td>
                                <td>250.000 VNĐ</td>
                                <td>430.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>Xe 05 chỗ</td>
                                <td>190.000 VNĐ</td>
                                <td>270.000 VNĐ</td>
                                <td>450.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>Xe 08 chỗ</td>
                                <td>240.000 VNĐ</td>
                                <td>350.000 VNĐ</td>
                                <td>530.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>Xe 16 chỗ</td>
                                <td>380.000 VNĐ</td>
                                <td>480.000 VNĐ</td>
                                <td>700.000 VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container my-4">
                    <p>* Giá thay đổi phụ thuộc vào khung giờ xuất phát của quý khách.</p>
                    <p>* Áp dụng cho 4 quận nội thành Ba Đình, Tây Hồ, Hoàn Kiếm. Những khu vực khác vui lòng gọi đến hotline: 0922.222.161</p>
                    <p>* Chúng tôi cam kết mang đến dịch vụ tiện ích và thoải mái nhất cho khách hàng.</p>
                </div>
            </div>
        )
    }
}
