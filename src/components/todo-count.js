import React from 'react';
import _ from 'lodash';

export default class TodoCount extends React.Component {

    //task counter
    renderTasksCount() {
        const tasksCount =  _.size(this.props.todos);
        return tasksCount == 1 ? '1 task' : (tasksCount + ' tasks');
    }

    render(){
        return <p className="bg-primary" style={{ padding: '5px 10px' }}>{ this.renderTasksCount() }</p>
    }
    
}