import React from 'react'
import { useCart } from 'react-use-cart'
import classes from "../cart.module.css"
import { Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';




function Itemcard({ item,id }) {
    const { addItem, totalItems, updateItemQuantity, items } = useCart()

    return (
        <div className="card col-3 mx-5" style={{ width: "300px", height: "450px" }}>
            <div className="card-body">
                <div>
                    <img
                        src={item.img}
                        className={classes.imgCard} />
                </div>
                <h4 style={{ fontWeight: "bold", border: "1px solid gray", borderRadius: "5px" }} className='my-3 text-center'>{item.title}</h4>
                <h4 style={{ fontWeight: "bold", border: "1px solid gray", borderRadius: "5px" }} className=' text-center'>Price: ${item.price}</h4>
            </div>

            {items?.map((item, index) => {
                return (
                    <div className='d-flex' style={{ justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-primary'>-</button>
                        <h4 className='mx-2'>{item.quantity}</h4>
                        <button className='btn btn-primary' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                    </div>
                )
            })}
            <div className='card-footer d-flex justify-content-center' style={{ border: "1px solid gray", backgroundColor: "lightgreen" }}>
                <Button sx={{ color: "black", fontWeight: "bold", borderRadius: "25px" }} onClick={() => { addItem(item) }}>Add to Bag</Button>
            </div>
        </div>
    )
}

export default Itemcard