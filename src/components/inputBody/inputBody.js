import Taro, { Component } from '@tarojs/taro'
import {View, Input, Image, Swiper, SwiperItem } from '@tarojs/components'
import './inputBody.scss'

class InputBody extends Component {
  render(){
    return (
      <View className='inputBody'>
        <Input 
          className="input"
          placeholder='搜索商家、商品名称'
          type='text'
          
        />
      </View>
    )
  }
}
export default InputBody