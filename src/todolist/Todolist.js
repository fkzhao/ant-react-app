import React, { Fragment, useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import './Todolist.css'
import axios from "axios";
import { Input, Space } from 'antd';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        console.log("这是模拟componentDidMount钩子函数")
        return () => {//return出来的函数本来就是更新前，销毁前执行的函数，现在不监听任何状态，所以只在销毁前执行
            console.log("这是模拟componentWillUnmount钩子函数")
        }
    }, []);

    return (
        <Fragment>
            <div>
                <input
                    className='input'
                    value={inputValue}
                    onChange={inputValueChange.bind()}
                >
                </input>
                <button
                    onClick={addTodolist.bind()}
                >
                Submit
                </button>
            </div>
            <ul>
                {
                    todoList.map((item, index) => {
                        return (
                            <div key={index}>
                                <TodoItem index={index} content={item} onClickCallback={deleteTodoList.bind()}></TodoItem>
                            </div>
                        );
                    })
                }
            </ul>
        </Fragment>   
    );

    function componentDidMount() {
        axios.get("/api/todolist")
        .then((data) => {
            alert("success");
        })
        .catch((e)=>{
            alert(e);
        });
        console.log("componentDidMount");
    }
    function addTodolist() {
        if (inputValue === '') {
            return;
        }
        const list = [...todoList, inputValue]
        setTodoList(list);
        setInputValue('');
    }

    function deleteTodoList(index) {
        console.log(this)
        const list = [...todoList];
        list.splice(index, 1);
        setTodoList(list);
        console.log('delete index: ' + index)
    }

    function inputValueChange(e) {
        setInputValue(e.target.value);
    }

}



export default TodoList;