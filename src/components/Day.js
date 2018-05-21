import React from 'react';
import TaskList from './TaskList'
import './Day.css'

export default function Day(props) {
    return (
        <div>
            <h2 id='all-days'>{props.day}</h2>
            <TaskList day={props.day} />
        </div>
    )
};
