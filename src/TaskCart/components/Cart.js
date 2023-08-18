import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'

function Cart() {
    const { isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items
    } = useCart()


    console.log(items);
    if (isEmpty) return <h1 className='text-center'>Cart is empty</h1>

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <table className='table  m-0 ' style={{ textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">Product </th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items?.map((item, index) => {
                                return (
                                    <tr key={index} style={{ textAlign: "center" }}>
                                        <td>
                                            <img
                                                src={item.img}
                                                style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        
                                        {/* <td className='d-flex'>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-primary'>-</button>
                                           <h4 className='mx-1'>{item.quantity}</h4>
                                           <button className='btn btn-primary' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                                        </td> */}
                                       <td>{item.quantity}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            ${item.price * item.quantity}
                                        </td>
                                        <td>
                                            <button onClick={() => removeItem(item.id)} className='btn btn-danger'>Remove Item</button>
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h4>Total Price : $ {cartTotal}</h4>
                </div>

            </div>
        </section>
    )
}

export default Cart