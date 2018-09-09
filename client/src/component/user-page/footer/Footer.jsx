import React, { Component } from 'react'
import dxImg from '../../../assets/images/5_loi_ich.png'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-light">
                <div className="container">
                    <img src={dxImg} alt="" className='img-fluid' style={{width: '100%'}}/>
                    <div className='text-center mt-4' style={{fontSize: '20px'}}>
                        <p className='mb-0'>
                            Taxi sân bay chuyên cung cấp dịch vụ Taxi Nội Bài với mức giá cạnh tranh nhất trên thị trường.
                        </p>
                        <p className='mb-0'>
                            Chúng tôi cung cấp dịch vụ đưa đón khách tại sân bay Nội Bài về trung tâm thành phố và ngược lại.
                        </p>
                        <p>
                            Với phương châm mang tới dịch vụ tốt với chi phí rẻ.
                        </p>
                        <p className='mb-0'>
                            Liên hệ trực tiếp với iCar Nội Bài để có giá mới nhất tại thời điểm bạn di chuyển.
                        </p>
                        <p className='mb-0'>
                            Đường dây nóng <i className="fas fa-phone fa-flip-horizontal"></i>: 0912.222.161 - 0963.828.499
                        </p>
                        <p className='mb-0'>
                            Địa chỉ <i className="fas fa-map-marker-alt"></i>: 249 Vân Trì - Đông Anh - Hà Nội
                        </p>
                        <p>
                            Email <i className="fas fa-envelope"></i>: taxisanbay@gmail.com
                        </p>
                     
                    </div>
                </div>
            </footer>
        )
    }
}
