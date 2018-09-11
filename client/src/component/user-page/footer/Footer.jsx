import React, { Component } from 'react'
import './Footer.css'

const data = [
    'Jaguar XE Porfolio 3 năm tuổi bán lại ngang giá',
    'Jaguar XE Porfolio 3 năm tuổi bán lại ngang giá',
    'Jaguar XE Porfolio 3 năm tuổi bán lại ngang giá'
]
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className=" container">
                <div className="row mt-2">
                    <div className="col-lg-5">
                        <span>Giới thiệu về TDCAR</span>
                        <hr className='hr-line my-1'/>
                        <span>Taxi Nội Bài là dịch vụ taxi sân bay trọn gói giá rẻ
                            của công ty CP Dịch vụ & Vận tải Taxi Nội Bài.
                        </span>
                        <br/>
                        <span>Tuyến Hà Nội - Nội Bài chỉ 150.000đ</span>
                        <br/>
                        <span>(đã bao gồm phí cầu phà, bến bãi và hóa đơn tài chính)</span>
                        <br/>
                        <br/>
                        <span>Mạng xã hội</span>
                        <hr className='hr-line my-1'/>
                        <div className='mt-2'>
                            <ul className='list-social'>
                                <li>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/New_Logo_Gmail.svg/1200px-New_Logo_Gmail.svg.png" width="35" height="35" alt=""></img>
                                </li>
                                <li>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png" width="35" height="35" alt=""></img>
                                </li>
                                <li>
                                    <img src="https://i.pinimg.com/originals/6a/ec/d4/6aecd4d3a513e32a11391a56d260574b.png" width="35" height="35" alt=""></img>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <span>Thông tin liên hệ</span>
                        <hr className='hr-line my-1'/>
                        <p className='my-3'><i className="fas fa-map-marker-alt fa-2x"></i> 140 Hào Nam, Đống Đa, Hà Nội</p>
                        <p className='my-3'><i className="fas fa-phone fa-flip-horizontal fa-2x"></i> 0922.222.161 - 0965.711.092</p>
                        <p className='my-3'><i className="fas fa-envelope fa-2x"></i> datxe@tdcar.vn</p>
                    </div>

                    <div className="col-lg-4">
                        <span>Bài viết mới</span>
                        <hr className='hr-line my-1'/>
                        {
                            data && data.map((item, index) => {
                                return <p className='my-3' key={index}>{item}</p>
                            })
                        }
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}
