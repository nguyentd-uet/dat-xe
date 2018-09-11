import React, { Component } from 'react'
import BoxBookCar from '../../box-book-car/BoxBookCar'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://znews-photo-td.zadn.vn/w860/Uploaded/OFH_oazszstq/2017_12_02/2019kiasorento10.jpg',
    carName: 'Kia Sorento',
    caption: 'Sản xuất năm 2018'
  },
  {
    src: 'https://car-images.bauersecure.com/pagefiles/74344/1040x585/mercedes_s500_01.jpg',
    carName: 'Mercedes S500',
    caption: 'Sản xuất năm 2018'
  },
  {
    src: 'https://toyotago.com.vn/wp-content/uploads/2016/12/Xe-Toyota-Innova-2016-compressed-e1490757887501.jpg',
    carName: 'Toyota Innova',
    caption: 'Sản xuất năm 2017'
  }
];

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.carName} />
          <CarouselCaption captionText={item.caption} captionHeader={item.carName} />
        </CarouselItem>
      );
    });

    return (
      <div>
        {/* <div className="container"> */}
          <div className="row my-3">
            <div className="col-md-8">
              <h3>CÁC DÒNG XE</h3>
              <hr style={{ width: '35%', borderTop: '1px solid black', marginLeft: '0' }} />
              <span>
                Taxi Nội Bài sử dụng nhiều loại xe đời mới (xe sản xuất từ năm 2011 trở lên) để đón tiễn
                quý khách hàng. Với nhiều lựa chọn cho quý khách hàng như Toyota Vios (xe 4 chỗ),
                Toyota Innova (xe 7 chỗ), Toyota Hiace (xe 16 chỗ), Hyundai County (29 chỗ) cùng
                nhiều loại xe mới sang trọng hiện đại, taxi Nội Bài cam kết mang đến những trải nghiệm
                tốt nhất trên quãng đường di chuyển của quý khách hàng.
              </span>
              <div>
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </div>
            </div>
            <div className="col-md-4">
              <BoxBookCar background='rgba(225, 225, 225, 0.4)' />
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}
