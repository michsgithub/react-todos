import React from 'react';
import _ from 'lodash';
import TodoCreate from './todo-create';
import TodoList from './todo-list';

//default task
const todos = [
    {
        task: 'Meeting at 6:00AM daily.',
        isCompleted: false
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        }
    }

    render() {
        return (
            <div>
                <h1>Things to do: </h1>
                <div className="td-list-con">

                    <TodoCreate
                        todos={ this.state.todos }
                        createTask={ this.createTask.bind(this) }
                        />

                    <TodoList
                        todos={ this.state.todos }
                        saveTask={ this.saveTask.bind(this) }
                        deleteTask={ this.deleteTask.bind(this) }
                        toggleTask={ this.toggleTask.bind(this) }
                        />
                </div>
            </div>
        )
    }

    //create new task
    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    //delete task
    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }

    //save task
    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    //mark task done
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }
}