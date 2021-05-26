import React from "react";

class ShowTodos extends React.Component{

    doneBtnClick = (index) => {
        //console.log(index);
        this.props.removetodos(index)
    }


    render(){


        
        return <ul>
            {
                this.props.todos.map((element,index) => 
                <li key={index}>
                {element}
                <button onClick={() => {this.doneBtnClick(index)}}>Done</button>
                </li>
                )
            }
        </ul>
            
        }


}



export default ShowTodos