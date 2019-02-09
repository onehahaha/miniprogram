import Taro, { Component } from '@tarojs/taro'
import { Image, Swiper, SwiperItem } from '@tarojs/components'

class Swipe extends Component {
  constructor () {
    super ()
    this.state = {
      swipeImgUrls:[
        'https://fuss10.elemecdn.com/4/48/37fce9a4ffbec79293357f68ecfcbjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/1/9c/d8da44b63fa1208476992df88edc9jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
      ]
    }
  }

  render () {
    return (
      <Swiper
        className='sweipe'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
        style='height:100px'
      >
        {
          this.state.swipeImgUrls.map((item , index)=>
            <SwiperItem key={index} >
              <Image
                style='width:100%;height:100%'
                src={item}
              />
            </SwiperItem>
          )
        }
      </Swiper>
    )
  }
}

export default Swipe