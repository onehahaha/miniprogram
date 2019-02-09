// @ts-nocheck
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
//	wx85dd9b82834b3723
const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/oder/oder',
      'pages/my/my'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0096fd',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#0096fd',
      backgroundColor: '#fff',
      list:[
        {
          pagePath: 'pages/index/index',
          text: '外卖',
          iconPath: 'assets/home1.png',
          selectedIconPath: 'assets/home.png'
        },
        {
          pagePath: 'pages/oder/oder',
          text: '订单',
          iconPath: 'assets/zhangdan1.png',
          selectedIconPath: 'assets/zhangdan.png'
        },
        {
          pagePath: 'pages/my/my',
          text: '我的',
          iconPath: 'assets/wode_1.png',
          selectedIconPath: 'assets/wode.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
