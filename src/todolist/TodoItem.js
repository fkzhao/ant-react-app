import React from "react";


function TodoItem(props) {
    return (
        <div onClick={handlerClick.bind()}>
            {props.content}
        </div>
    );

    function handlerClick(index) {
        if (props.index !== null && props.onClickCallback !== null) {
            props.onClickCallback(props.index)
        }
    }
}

export default TodoItem;