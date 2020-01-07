import React,{Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
//import sliders from './img';

class Home extends Component {
    constructor() {
        super();
        this.state={
            imgs:[]
        };
}
componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(imgs => this.setState({imgs}, () => console.log('images fetched...', imgs)));
  }
 sliders(){
    return this.state.imgs.map(data => {
        return ( <div key={data.src} >
            <img alt="image" className="img" src={data.src} />
        </div>)
    });
 }

  render() {
      const settings = {
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
          arrow: false
      }
      //
      return (
          <div className="slick">
              <Slider {...settings}>
                  {this.sliders()}
              </Slider>
          </div>
      );
  }
}
export default Home;
