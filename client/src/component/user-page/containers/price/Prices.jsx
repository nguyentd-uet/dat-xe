import React, { Component } from 'react'
import BoxBookCar from '../../box-book-car/BoxBookCar'
import './Prices.css'

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

export default class Prices extends Component {
  render() {
    return (
      <div className='price-page'>
        <div className="">
          <div className="row my-3">
            <div className="col-md-8">
              <h3>BẢNG GIÁ</h3>
              <h4>* XE SÂN BAY</h4>
              <h4>* XE ĐI TỈNH</h4>
              <h4>* XE CÔNG TÁC, TOUR CITY</h4>
            </div>
            <div className="col-md-4">
              <BoxBookCar background='rgba(225, 225, 225, 0.4)' />
            </div>
          </div>
        </div>

        <div className=' my-4'>
          <h3 className='mt-4 mb-1'>BẢNG GIÁ THUÊ XE SÂN BAY</h3>

          <table className="table table-bordered text-center mt-3">
            <thead>
              <tr className='' style={{ backgroundColor: '#00c0ef ' }}>
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

        <div className=' my-4'>
          <h3 className='mt-4 mb-1'>BẢNG GIÁ THUÊ XE ĐI TỈNH</h3>

          <table className="table table-bordered text-center mt-3">
            <thead>
              <tr className='' style={{ backgroundColor: '#00c0ef ' }}>
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

        <div className=' my-4'>
          <h3 className='mt-4 mb-1'>BẢNG GIÁ THUÊ XE CÔNG TÁC, TOUR CITY</h3>

          <table className="table table-bordered text-center mt-3">
            <thead>
              <tr className='' style={{ backgroundColor: '#00c0ef ' }}>
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
      </div>
    )
  }
}
