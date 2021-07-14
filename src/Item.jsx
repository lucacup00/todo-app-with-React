import React from 'react'
import './Item.css'
import DeleteIcon from '@material-ui/icons/Delete';


function Item(props) {
 
    return (
        <div className="Div-item">
            <li className="item-list">
                {props.value}
            </li>
             <button onClick={()=>{
                    props.func(props.id)
                }}><DeleteIcon/>
                
             </button>
             
        </div>
    )
}

export default Item
