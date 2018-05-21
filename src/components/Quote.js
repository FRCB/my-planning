import React, { Component } from 'react';
import axios from 'axios';
import './Quote.css'

export default class Quote extends Component {
    constructor() {
        super();

        this.state = {
            quote: "",
            author: ""
        }
    }

    componentDidMount() {
        axios.get(`https://andruxnet-random-famous-quotes.p.mashape.com/`, { headers: { "X-Mashape-Key": "YRsvfxircSmsh4Wjz4NWO3D6t5brp1y79cNjsnNrCuQszEem60" } }).then(res => {
            this.setState({ quote: res.data[0].quote, author: res.data[0].author })
        })

    }

    render() {
        return (
            <div id='quote-background'>
                <h3 className='quote'>
                    {this.state.quote}
                </h3>
                <p className='author'
                >{this.state.author}</p>
            </div>
        );
    }
}