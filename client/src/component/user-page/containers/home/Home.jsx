import React, { Component } from 'react'
import './Home.css'
import dxImg from '../../../../assets/images/5_loi_ich.png'
import BoxBookCar from '../../box-book-car/BoxBookCar'
import {Link} from 'react-router-dom'

const data = [
    {
        loTrinh: 'Quận Tây Hồ, Ba Đình, Cầu Giấy, Long Biên',
        hanoiNoiBai: '180.000',
        noibaiHanoi: '250.000',
        khuHoi: '250.000'
    },
    {
        loTrinh: 'Quận Đống Đa, Nam Từ Liêm, Bắc Từ Liêm',
        hanoiNoiBai: '180.000',
        noibaiHanoi: '250.000',
        khuHoi: '250.000'
    },
    {
        loTrinh: 'Quận Hoàng Mai, Thanh Trì',
        hanoiNoiBai: '180.000',
        noibaiHanoi: '250.000',
        khuHoi: '250.000'
    },
]

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

export default class Home extends Component {

    onClickXemGiaBtn() {
        let {match, history} = this.props;
        history.push(`${match.url}/dat-xe`);
    }
    render() {
        return (
            <div className='home-page'>
                <div className="my-container">
                    <h3>DỊCH VỤ TAXI SÂN BAY NỘI BÀI GIÁ RẺ</h3>
                    <div className="row service-text">
                        <div className="col-md-5" style={{paddingTop: '100px', fontSize: '18px'}}>
                            <div style={{background: 'rgba(225, 225, 225, 0.9)', padding: '20px'}}>
                                <b>Dịch vụ xe gia đình chuyên cung cấp:</b><br/>
                                <span>- Sân bay Hà Nội - Nội Bài - Hà Nội</span><br/>
                                <span>- Đi tỉnh 1 chiều, 2 chiều</span><br/>
                                <span>- Phục vụ công tác, tour city</span><br/>
                                <span>- Cung cấp các dòng xe từ Sedan trở lên</span><br/>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-3">
                            <BoxBookCar background='rgba(225, 225, 225, 0.9)' />
                        </div>
                    </div>
                    <img src="http://www.executivetravelandparking.com/wp-content/uploads/2013/12/Airport-Parking-1.jpg" alt='hero-img'/>
                </div>

                <div className=' my-4'>
                    <h3 className='text-center mt-4 mb-1'>BẢNG GIÁ THAM KHẢO</h3>
                    <Link to='/home/prices' className='float-right text-danger mt-0'>Xem thêm bảng giá >></Link>

                    <table className="table table-bordered text-center mt-3">
                        <thead>
                            <tr className='' style={{backgroundColor: '#00c0ef '}}>
                                <th scope="col">Lộ trình tuyến</th>
                                <th scope="col">HÀ NỘI - NỘI BÀI</th>
                                <th scope="col">NỘI BÀI - HÀ NỘI</th>
                                <th scope='col'>KHỨ HỒI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) => {
                                    return (
                                        <tr key={item.loTrinh}>
                                            <td><b>{item.loTrinh}</b></td>
                                            <td>{item.hanoiNoiBai} VNĐ</td>
                                            <td>{item.noibaiHanoi} VNĐ</td>
                                            <td>{item.khuHoi} VNĐ</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <button className='btn btn-danger btn-block'><b>ĐẶT XE NGAY</b></button>
                </div>

                <div className=" my-4">
                    <p>+ Giá trên là giá chưa bao gồm phí cầu đường bến bãi, chưa bao gồm hóa đơn VAT.</p>
                    <p>+ Giá thay đổi phụ thuộc vào khung giờ xuất phát của quý khách. Giá tăng 30k từ 23 giờ tối đến 6 giờ sáng hôm sau.</p>
                    <p>+ Dừng xe đón trả khách dọc đường thêm 30k mỗi điểm.</p>
                    <p>+ Chúng tôi cam kết mang đến dịch vụ tiện ích và thoải mái nhất cho khách hàng.</p>
                </div>

                <div className="">
                    <img src={dxImg} alt="banner" width='100%'/>
                </div>

                <div className=" my-4">
                    <h3 className='text-center mb-4'>TIN TỨC BÀI VIẾT</h3>     

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
        )
    }
}
