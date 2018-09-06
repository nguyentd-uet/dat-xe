import React, { Component } from 'react'

export default class Step1 extends Component {

    onClickBtn() {
        this.props.onChangeStep(2)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4 border-right">
                    <b>Tuyến xe: Hà Nội - Nội Bài </b><i className="fas fa-exchange-alt text-primary ml-2" style={{ fontSize: '20px' }}></i>
                    <div className="form-group my-3">
                        <span className="fas fa-map-marker-alt form-control-icon text-primary"></span>
                        <input type="text" className="form-control" placeholder="Địa chỉ đón" />
                    </div>
                    <div className="form-group my-3">
                        <span className="fas fa-map-marker-alt form-control-icon text-danger"></span>
                        <input type="text" className="form-control" value='Nội Bài' disabled />
                    </div>
                    <div className="form-group my-3">
                        <span className="fas fa-calendar-alt form-control-icon text-info"></span>
                        <input type="datetime-local" className="form-control" placeholder="Thời gian khởi hành" />
                    </div>
                    <div className="custom-control custom-radio custom-control-inline" style={{ width: '45%' }}>
                        <input type="radio" name="customRadioInline1" className="custom-control-input" checked />
                        <label className="custom-control-label">Một chiều</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline" style={{ width: '45%' }}>
                        <input type="radio" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label">Hai chiều</label>
                    </div>
                    <div className="form-group my-3">
                        <span className="fas fa-car form-control-icon text-primary"></span>
                        <input type="text" className="form-control" placeholder='Số xe' />
                    </div>
                    <button className='btn btn-danger mb-3' style={{ width: '100%' }}>Đi xe riêng</button>
                    <button className='btn btn-outline-primary mb-3' style={{ width: '100%' }}>Đi chung xe</button>
                </div>
                <div className="col-md-8 border-left">
                    <table className="table table-bordered text-center mb-5">
                        <thead>
                            <tr className='text-light' style={{ backgroundColor: '#155dab' }}>
                                <th scope="col">LOẠI XE</th>
                                <th scope="col">BẢNG GIÁ</th>
                                <th scope="col">ĐẶT XE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Xe 04 chỗ</td>
                                <td>170.000 VNĐ</td>
                                <td><button className='btn btn-danger' onClick={this.onClickBtn.bind(this)}>Đặt ngay</button></td>
                            </tr>
                            <tr>
                                <td>Xe 05 chỗ</td>
                                <td>190.000 VNĐ <br /> <small className='text-danger'>Giá tăng 30.000 từ <br /> 22h tối đến 3h sáng</small></td>
                                <td><button className='btn btn-danger' onClick={this.onClickBtn.bind(this)}>Đặt ngay</button></td>
                            </tr>
                            <tr>
                                <td>Xe 08 chỗ</td>
                                <td>240.000 VNĐ <br /> <small className='text-danger'>Giá tăng 30.000 từ <br /> 22h tối đến 3h sáng</small></td>
                                <td><button className='btn btn-default' disabled>Hết xe</button></td>
                            </tr>
                            <tr>
                                <td>Xe 16 chỗ</td>
                                <td>380.000 VNĐ <br /> <small className='text-danger'>Giá tăng 50.000 từ <br /> 22h tối đến 3h sáng</small></td>
                                <td><button className='btn btn-danger' onClick={this.onClickBtn.bind(this)}>Đặt ngay</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
