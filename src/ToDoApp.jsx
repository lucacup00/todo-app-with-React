import React,{useState} from 'react'
import Item from './Item.jsx'
import './todoapp.css'
import AddIcon from '@material-ui/icons/Add';

function ToDoApp() {
    const [inputValue,setInputValue]=useState("")//per prendere i valori dal input
    const [todoItems,setTodoItems]=useState([])//per aggiungere i valori all'interno dei array

    
    //function to get the values from the input
    const prendiInputValore=(e)=>{
        
            console.log(e.target.value)
            setInputValue(e.target.value)
        

      
    }
    

//insert a new to do within the array
    const inserisciToDo=()=>{
        if(inputValue==""){
            alert('inserisci todo');
        }else{
            
            setTodoItems((prev)=>{
                return[
                    ...prev, //i valori precedenti
                    inputValue //valore attuale
                    
                ]
            })
        }

       setInputValue("")
            
           
         
    }

   // to delete a new todo
    const Delete=(id)=>{
        setTodoItems(()=>{
            return todoItems.filter((indice)=>{
                return id!==indice
            })
        })

    }
    
    return (
       
        <div className="main-div">
           <div className="todo-div">
               <h1>Todo List</h1>
              <div className="div-input-button">
                  <input value={inputValue} onChange={prendiInputValore} className="input-todo" type="text" placeholder="Inserisci il todo"/>
                 <button onClick={inserisciToDo} className="btn"><AddIcon/></button>
                  
              </div>

              <div className="div-items">
                <ol>
                {todoItems.map((valore,index)=>{
                    return (
                    <Item key={index} value={valore} id={index} func={Delete}/>
                )})}
                </ol>
              </div>
              
           </div>
        </div>
    )
}

export default ToDoApp
