import React, { Component } from 'react'

export default class Step2 extends Component {
  onClickBtn() {
    this.props.onChangeStep(3)
  }
  render() {
    return (
      <div className='row'>
        <div className="col-md-8">
          <div className="form-group row mb-0">
            <div className="col-md-6 mb-3">
              <span className="fas fa-user form-control-icon"></span>
              <input type="text" className="form-control" placeholder="Họ và tên" />
            </div>
            <div className="col-md-6 mb-3">
              <span className="fas fa-phone form-control-icon"></span>
              <input type="text" className="form-control" placeholder="Số điện thoại liên hệ" />
            </div>
          </div>
          <div className="form-group">
            <span className="fas fa-edit form-control-icon"></span>
            <textarea className="form-control" placeholder="Ghi chú thêm thông tin cho tài xế" rows={2}/>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" checked/>
            <label className="custom-control-label">Tôi muốn đón/trả thêm người tại địa chỉ khác</label>
          </div>
          <div className="form-group">
            <span className="fas fa-map-marked-alt form-control-icon"></span>
            <input type="text" className="form-control" placeholder="Thêm địa điểm" />
          </div>
          <div className="custom-control custom-radio custom-control-inline" style={{ width: '45%' }}>
            <input type="radio" name="customRadioInline1" className="custom-control-input" checked />
            <label className="custom-control-label">Bay nội địa</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline" style={{ width: '45%' }}>
            <input type="radio" name="customRadioInline1" className="custom-control-input" />
            <label className="custom-control-label">Bay quốc tế</label>
          </div>
          <div className="form-group mt-3">
            <span className="fas fa-plane form-control-icon"></span>
            <input type="text" className="form-control" placeholder="Số hiệu chuyến bay" />
          </div>
          <div className="form-group">
            <span className="fas fa-calendar-alt form-control-icon"></span>
            <input type="datetime-local" className="form-control" placeholder="Thời gian cất cánh"/>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" checked/>
            <label className="custom-control-label">Xuất hóa đơn (Giá bao gồm hóa đơn VAT sẽ cộng 10%)</label>
          </div>
          <div className="form-group row mb-0">
            <div className="col-md-6 mb-3">
              <span className="fas fa-user form-control-icon"></span>
              <input type="text" className="form-control" placeholder="Tên công ty" />
            </div>
            <div className="col-md-6 mb-3">
              <span className="fas fa-building form-control-icon"></span>
              <input type="text" className="form-control" placeholder="Địa chỉ công ty" />
            </div>
          </div>
          <div className="form-group row mb-0">
            <div className="col-md-6 mb-3">
              <span className="fas fa-money-check form-control-icon"></span>
              <input type="text" className="form-control" placeholder="Mã số thuế" />
            </div>
            <div className="col-md-6 mb-3">
              <span className="fas fa-map-marked-alt form-control-icon"></span>
              <input type="text" className="form-control" placeholder="Địa chỉ nhận hóa đơn" />
            </div>
          </div>
          <button className='btn btn-danger btn-block mb-3' onClick={() => this.onClickBtn()}>Hoàn tất</button>
        </div>
        <div className="col-md-4">
          <div className='border p-2 mb-2'>
            <h4><b>Thông tin chuyến đi</b></h4>
            <span><b>Tuyến xe:</b> Hà Nội - Nội Bài</span><br/>
            <span><b>Điểm đón:</b> Sân bay Nội Bài</span><br/>
            <span><b>Điểm trả:</b> Ngã Tư Sở, Đống Đa, Hà Nội, Việt Nam</span><br/>
            <span><b>Thời gian:</b> 12:00 05/09/2018</span><br/>
            <span><b>Loại xe:</b> Xe 5 chỗ</span><br/>
            <span><b>Số lượng:</b> 1 xe</span><br/>
            <span><b>Một chiều</b></span><br/>
            <span><b>Hình thức:</b> Đi xe riêng</span>
            <hr/>
            <h4 className='text-right text-primary'>284.000 VNĐ</h4>
          </div>
          <div className="border p-2">
            <h4><b>Ghi chú</b></h4>
            <span><small>- Trong trường hợp Quý khách yêu cầu taxi riêng, taxi sẽ đến đón đúng giờ và đúng địa điểm Quý khách yêu cầu.</small></span>
            <br/>
            <span><small>- Trong trường hợp Quý khách đi chung taxi, taxi sẽ đến đón Quý khách tại địa điểm Quý khách yêu cầu trong khoảng thời gian +/- 15 phút.
              Chúng tôi sẽ thông báo chính xác thời gian đón trước 60 phút so với giờ khởi hành Quý khách chọn, và Quý khách cần chuẩn bị
              để khởi hành sớm hơn 15 phút hoặc muộn hơn 15 phút.</small>
            </span>

          </div>
        </div>
      </div>
    )
  }
}
