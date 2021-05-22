import React, { Component } from 'react';

class Result extends Component {

    SetContentStyle(){
        return{
            color : this.props.color,
            fontSize : this.props.fontSize
        }
    }
    
    render() {
        return (
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">Color: {this.props.color} - Fontsize: {this.props.fontSize} </h6>
                        </div>
                        <div className="card-body">
                            <div className="card-text content" style={this.SetContentStyle()}>Nội dung Setting</div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Result;