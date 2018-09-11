import React, { Component } from 'react'

export default class BoxBookCar extends Component {
  render() {
    const {background} = this.props;

    return (
      <div style={{ background: background, padding: '20px' }}>
        <h4 className='text-danger text-center my-3'>ĐẶT XE NGAY</h4>
        <div className="form-group">
          <input type="text" className='form-control' placeholder='Họ và tên' />
        </div>
        <div className="form-group">
          <input type="text" className='form-control' placeholder='Số điện thoại' />
        </div>
        <div className="form-group">
          <input type="text" className='form-control' placeholder='Loại xe' />
        </div>
        <button className='btn btn-danger btn-block mb-3'><b>ĐẶT XE</b></button>
      </div>
    )
  }
}
