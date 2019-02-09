import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Swiper, SwiperItem } from '@tarojs/components'

class My extends Component {
  constructor () {
    super()
  }

  config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View>
        <Text>
          我的
        </Text>
      </View>
    )
  }

}

export default My