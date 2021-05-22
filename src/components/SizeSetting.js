import React, { Component } from 'react';

class SizeSetting extends Component {
    onChangeFont(value){
        this.props.onReceiveFontChange(value);
    }
    render() {
        return (
                <div className="card mb-3">
                    <div className="card-header bg-warning">
                        Size : {this.props.fontSize}px
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-success mr-2" onClick={() => this.onChangeFont(-2)}>Giảm</button>
                        <button type="button" className="btn btn-success" onClick={() => this.onChangeFont(2)}>Tăng</button>
                    </div>
                </div>
        );
    }
}

export default SizeSetting;