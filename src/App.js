import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize : 14
    } 
    this.onSetColor = this.onSetColor.bind(this)
    this.onSetFont = this.onSetFont.bind(this)
    // this.onSettingDefault = this.onSettingDefault.bind(this)
  }
  onSetColor(params){
    this.setState({
      color : params
    })
  }
  onSetFont(params){
    if(this.state.fontSize+params>=8 && this.state.fontSize+params<=36){
      this.setState({
        fontSize : this.state.fontSize + params
      })
    }
  }
  onSettingDefault = (value) => {
    if(value){
      this.setState({
        color : 'red',
        fontSize : 14
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
            <div className="col-lg-6">
              <SizeSetting fontSize={this.state.fontSize} onReceiveFontChange={this.onSetFont}/>
              <Reset onSettingDefault={this.onSettingDefault}/>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize}/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;