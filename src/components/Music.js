import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Music extends Component {
  render() {
    return <ReactPlayer url='https://www.youtube.com/watch?v=pp-wmEKWLSo'
      playing
      width='1px'
      height='1px'
    />
  }
}