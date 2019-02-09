// @ts-nocheck
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'
import './swipeImg.scss'

class SwipeImg extends Component{
  render(){
    return <View className='swipeListItem'>
            <Image
              className='img'
              src={this.props.data.img_src}
            />
            <View className='swipeListItemTit'>{this.props.data.title}</View>
          </View>
  }
}

export default SwipeImg