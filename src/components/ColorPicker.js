import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['red','green','blue','gray']
        }
    }

    showColor(color){
        return {
            backgroundColor : color
        }
    }

    onSetActive(color){
        this.props.onReceiveColor(color)
    }

    render() {
        var elementColors =  this.state.colors.map((color, index) => {
            return <span 
                    key={index} 
                    style={this.showColor(color)} 
                    className = {(color === this.props.color) ? "active" : ""}
                    onClick={() => this.onSetActive(color)}
                    ></span>
        });
        return (
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        Color Picker
                    </div>
                    <div className="card-body">
                        {elementColors}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;