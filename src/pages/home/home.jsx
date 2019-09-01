import React, { Component } from 'react';

import img from './111.jpg';

class Home extends Component {
    render() {
        return (
            <div>this is home
                <div>
                    <img src={img} alt=""/>
                </div>
            </div>
        )
    }
}

export default Home;