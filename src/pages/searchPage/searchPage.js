import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'

class SearchPage extends Component {
  constructor () {
    super()
  }

  render(){
    return (
      <View>
        <Input />
        搜索页面
      </View>
    )
  }
}

export default SearchPage