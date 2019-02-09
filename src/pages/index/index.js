// @ts-nocheck
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import BanerSwipe from '../../components/swiper/swiper';
import SecSwipe from '../../components/swipe2/swipe2'
import InputBody from '../../components/inputBody/inputBody';
import MainList from '../../components/mainList/mainList';


import './index.scss'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
class Index extends Component {

  config = {
    navigationBarTitleText: '饿了么',
    backgroundColor: '#f5f5f5'
  }

  render () {
    return (
      <View className='index'>
        <InputBody />
        <BanerSwipe />
        <SecSwipe />
        <MainList />
      </View>
    )
  }
}

export default Index