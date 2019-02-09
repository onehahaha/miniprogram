// @ts-nocheck
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'

import './swipe2.scss'

import SwipeImg from './swipeImg';

class SecSwipe extends Component {
  constructor () {
    super ()
    this.state = {
      swipe1:[]
    }
  }

  componentWillMount(){
    let _this = this
    Taro.request({
      url: 'http://localhost:3000/swipelist',
      dataType: JSON,
      success: function (res) {
        // console.log(JSON.parse(res.data));
        _this.setState({
          swipe1:JSON.parse(res.data).swipe1
        })
      }

    })
  }

  render(){
    return (
      <Swiper
        className='sweipe'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        indicatorDots
        style='height:200px'
      >
        <SwiperItem className='swipeList'>
        {
          this.state.swipe1.map(( item , index )=>{
            return <SwipeImg key={index} data={item}/>
          })
        }
        </SwiperItem>
      </Swiper>
    )
  }
}

export default SecSwipe
