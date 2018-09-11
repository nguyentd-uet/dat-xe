import React, { Component } from 'react'

export default class Step3 extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-md-6">
                <div className='border p-2'>
                    <h4><b>Thông tin khách hàng</b></h4>
                    <p><b>Họ và tên:</b> Nguyễn Huỳnh Đức</p>
                    <p><b>Thời gian đặt:</b> 01:19 05/09/2018</p>
                    <p><b>Số điện thoại:</b> 0963828499</p>
                    <p><b>Ghi chú:</b> 12:00 05/09/2018</p>
                    <p><b>Chuyến bay:</b> Nội địa</p>
                    <p><b>Số hiệu chuyến bay:</b> VJ192</p>
                    <p><b>Thêm điểm đón/trả khách:</b> Không</p>
                    <p><b>Yêu cầu xuất hóa đơn:</b> Có</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="border p-2">
                    <h4><b>Thông tin chuyến đi</b></h4>
                    <p><b>Tuyến xe:</b> Hà Nội - Nội Bài</p>
                    <p><b>Điểm đón:</b> Sân bay Nội Bài</p>
                    <p><b>Điểm trả:</b> Ngã Tư Sở, Đống Đa, Hà Nội, Việt Nam</p>
                    <p><b>Thời gian:</b> 12:00 05/09/2018</p>
                    <p><b>Loại xe:</b> Xe 5 chỗ</p>
                    <p><b>Số lượng:</b> 1 xe</p>
                    <p><b>Một chiều</b></p>
                    <p><b>Hình thức:</b> Đi xe riêng</p>
                    <hr/>
                    <h4 className='text-right text-primary'>284.000 VNĐ</h4>
                </div>
            </div>
            
        </div>
        <div className="row mt-2">
            <div className="col-md-6">
                <div className='border p-2'>
                    <h4><b>Thông tin lái xe</b></h4>
                    <p><b>Mã chuyến xe:</b> 000169</p>
                    <p><b>Tuyến xe:</b> Hà Nội - Nội Bài</p>
                    <p><b>Tình trạng:</b> Chưa xuất phát / Đang đến đón khách / Đã đón(trả) khách</p>
                    <p><b>Tên lái xe:</b> Nguyễn Văn An</p>
                    <p><b>Số điện thoại:</b> 0987654321</p>
                    <p><b>Biển số xe:</b> 29Y7 088.37</p>
                    <p><b>Loại xe:</b> Toyota Trắng</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="border p-2">
                    <h4 className='my-0'><b>Ghi chú</b></h4>
                    <p className='my-0'>- Quý khách sẽ nhận được thông tin tài xế sau khi điều hành điều xe, thông thường trước chuyến đi 60 phút.
                        Với những chuyến đi vào ban đêm, sáng sớm thông tin tài xế sẽ được cập nhật trước 21h ngày trước đó.
                    </p>
                    <p className='my-0'>- Trong trường hợp Quý khách yêu cầu taxi riêng, taxi sẽ đến đón đúng giờ và đúng địa điểm Quý khách yêu cầu.</p>
                    <p className='my-0'>- Trong trường hợp Quý khách đi chung taxi, taxi sẽ đến đón Quý khách tại địa điểm Quý khách yêu cầu trong khoảng thời gian +/- 15 phút.
                        Chúng tôi sẽ thông báo chính xác thời gian đón trước 60 phút so với giờ khởi hành Quý khách chọn, và Quý khách cần chuẩn bị
                        để khởi hành sớm hơn 15 phút hoặc muộn hơn 15 phút.
                    </p>
                    <p className='my-0'>- Mọi thông tin chi tiết xin liên hệ hotline: <b>0912.222.161</b>-<b>0963.828.499</b></p>
                </div>
            </div>
            
        </div>
        <div className="row mt-3">
            <div className="col-md-6">
                <button className='btn btn-danger btn-block'>Xác nhận đặt vé</button>
            </div>
            <div className="col-md-6">
                <button className='btn btn-default btn-block'>Hủy chuyến xe</button>
            </div>
        </div>
      </div>
    )
  }
}
