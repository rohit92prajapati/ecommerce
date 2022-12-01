import React, { Fragment, useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductPage() {
  const [productDetails,setProductDetails]=useState([])
  useEffect(()=>{
    (async()=>{

      const response=await axios.get('https://fakestoreapi.com/products')
      setProductDetails(response.data)
      console.log('response',response.data)
    })()
   
  },[])
  return (
    <Fragment>
      <div><Navbar/></div>
      <div className='grid grid-cols-4 gap-5'>
      {productDetails.length!==0?productDetails.map(({description,image,price,title})=>{
        return(<Card sx={{ maxWidth: 345 } } className="flex flex-col justify-between">
          <div><CardMedia
            component="img"
            height="140"
            className='h-96 p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent></div>
          
          <CardActions >
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>)
      }) :""}
      
      </div>
    </Fragment>
    
  )
}
