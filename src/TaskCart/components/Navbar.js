import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import Itemcard from "./Itemcard"


function Navbar() {

    const [selectedImage, setSelectedImage] = useState();
   
    const [isCardVisible, setIsCardVisible] = useState(false);

    const [cartData, setCartData] = useState({
        title: "",
        price: "",
    })
 const [data, setData] = useState([])
    useEffect(() => {
        cartData.img = selectedImage
    }, [selectedImage])

    const handleChange = (e) => {
        const { name, value } = e.target
        setCartData((pre) => ({ ...pre, id: uuidv4(), [name]: value }))
    }
    // console.log(cartData);

    const toggleCardVisibility = () => {
        setIsCardVisible(!isCardVisible);
      };

    const imageChange = (e) => {
        const size = e.target.files[0].size

        if (size < 100000) {
            if (e.target.files && e.target.files.length > 0) {
                setSelectedImage(URL.createObjectURL(e.target.files[0]));
            }
        } else {
            alert("Image size should be less than 100kb")
        }
    };

    const handleForm=(e)=>{
        setData((pre) => ([...pre, cartData]))
        setCartData({
            title: "",
            price: "",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // setData((pre) => ([...pre, cartData]))
        setData([...data,cartData])
        setCartData({
            title: "",
            price: "",
        })

    }
console.log(data);
    useEffect(() => {
        if (data) {
            localStorage.setItem("cardData", JSON.stringify(data))
        }
    }, [data])

    const getData = JSON.parse(localStorage.getItem("cardData"))

    return (
        <>
        <form onSubmit={handleSubmit}>

            <AppBar sx={{ backgroundColor: "lightgray" }}>
                <Toolbar className='d-flex justify-content-end'>
                    <button className='btn btn-danger' style={{ margin: "0 auto", backgroundColor: "red" }}  onClick={toggleCardVisibility}><LocalGroceryStoreIcon /> Buy Now</button>
                </Toolbar>
            </AppBar>

            {isCardVisible && (

            <Card  sx={{ maxWidth: "345px",margin:"100px 250px 250px 400px" }}>
                <CardMedia>
                    <label style={{ fontWeight: "bold", margin: "10px 0 10px 80px" }}>Choose File to Upload: </label>
                    <input type="file" className="form-control" onChange={imageChange} accept="image/png , image/jpeg, image/webp" multiple required />
                    <p className='text-danger'style={{margin:"0 0 10px 10px"}} >Minimum Size 100kb</p>
                </CardMedia>
                <CardContent>
                    <div>
                    <label style={{ fontWeight: "bold", margin: "0 20px 5px 90px" }}>Product Name <br /></label>
                    </div>
                    <div>
                        <input type="title" className='form-control' name='title' value={cartData.title} onChange={handleChange}  />
                    
                    </div>
                    <div>
                    <label style={{ fontWeight: "bold", margin: "0 20px 5px 90px" }}>Product Price <br /></label>
                    </div>
                    <div>
                        <input type="price" className='form-control' name='price' value={cartData.price} onChange={handleChange}  />
                    
                    </div>
                </CardContent>
                <CardActions>
                    <Button type='submit'onClick={handleForm} variant='contained' sx={{paddingX:"50px",margin:"0 auto"}}>Submit</Button>
                </CardActions>
            </Card>
            )}
            </form>
           
            {selectedImage && <div style={{ margin: "100px" }} className='d-flex'>
                {getData?.map((item, index) => {
                    console.log(item);
                    return (
                        <Itemcard 
                         img={item.img}
                        title={item.title}
                            price={item.price}
                            key={index}
                            item={item} />
                    )
                })}
            </div>
            }
        </>
    )
}

export default Navbar

