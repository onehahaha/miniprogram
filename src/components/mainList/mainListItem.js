// @ts-nocheck
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'

import "./mainListItem.scss"

class MainListItem extends Component {
  render(){
    return (
      <View className='list-item'>
        <View className="top">
          <View className="top-logo">
            <Image className='logo' src='https://fuss10.elemecdn.com/e/79/2bb8d23f13c1759b65ebf7cd86995jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'/>
          </View>
          <View className="top-title">
            <View>
              <Text className="pinpai">品牌</Text>
              <h1>正新鸡排</h1>
            </View>
            <h2>月售300单</h2>
            <View className="peisong">
              <h3>￥15起送|配送费￥5</h3>
              <Text>863m|26分钟</Text>
            </View>
          </View>
        </View>
        <View className="body">
          <View className="body-item">
            
          </View>
        </View>
      </View>
    )
  }
}

export default MainListItem