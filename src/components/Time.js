import React, { Component } from 'react';
import axios from 'axios';
import './Time.css'

export default class Time extends Component {
    constructor() {
        super();

        this.state = {
            time: "",

        }
    }

    componentDidMount() {
        axios.get('https://tehuano-time-zone-v1.p.mashape.com/api2/timezone/48.853/2.35', { headers: { "X-Mashape-Key": 'YRsvfxircSmsh4Wjz4NWO3D6t5brp1y79cNjsnNrCuQszEem60' } }).then(res => {
            this.setState({ time: res.headers.date.slice(0, 25) })
        })

    }

    render() {
        return (
            <div>
                <h3 className='time'>
                    Paris Time Zone
                    <br />
                    {this.state.time}
                </h3>
            </div>
        );
    }
}