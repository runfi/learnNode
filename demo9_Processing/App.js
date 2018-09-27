import React,{Component} from 'react';
import $ from 'jquery';

export default class App extends Component {
  componentDidMount(){
    $.get('http://127.0.0.1:8087/introduce',function(data){
      console.log(data);
    })
  }
  render(){
    return(
      <p style={{
        margin:'20px',
        fontFamily:'幼圆'
      }}>按F12查看获取到的数据</p>
    )
  }
}