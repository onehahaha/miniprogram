import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Swiper, SwiperItem } from '@tarojs/components'

class Oder extends Component {
  constructor () {
    super()
  }

  config = {
    navigationBarTitleText: '订单'
  }

  render () {
    return (
      <View>
        <Text>
          订单
        </Text>
      </View>
    )
  }

}

export default Oder