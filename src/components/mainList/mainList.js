// @ts-nocheck
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'

import "./mainList.scss"
import MainListItem from './mainListItem';

class MainList extends Component {
  render(){
    return (
      <MainListItem />
    )
  }
}

export default MainList