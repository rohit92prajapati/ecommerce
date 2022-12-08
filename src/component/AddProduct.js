import React, { Fragment, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import { useDispatch,useSelector } from "react-redux";
import { filteraddProduct,filterclearProduct } from "../redux/counterSlice";

const validationSchema = yup.object({
  title: yup.string("Enter your title").required("title is required"),
  description: yup
    .string("Enter  description")
    .required("description is required"),
  image: yup.string("Enter  image").required("Image is required"),
  price: yup
    .number()
    .positive("price can't start with a minus")
    .required("Price  is required"),
  category: yup.string("Enter  category").required("category is required"),
});

export default function AddProduct({ onClose, title,productId }) {
  const addProduct = useSelector((state) => state.filterProduct.addProducts);
 
  
  const dispatch = useDispatch();
  const formik = useFormik({
    
    initialValues: {
      title: '',
      price: '',
      description: '',
      image:'',
      category: '',
      id:''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      if (title === "ADD PRODUCT") {
        const response = await axios.post(
          "https://fakestoreapi.com/products",
          values
        );

        dispatch(filteraddProduct([response.data]));
        onClose();
      }
      else{
        const response = await axios.put(
          `https://fakestoreapi.com/products/${formik.values.id}`,
          values
        );
      const updatedProduct=addProduct.map((el)=>el.id==response.data.id? response.data:el)
          console.log('updatedProduct',updatedProduct)
          dispatch(filterclearProduct())
      dispatch(filteraddProduct(updatedProduct));
      }
    },
  });
  useEffect(()=>{
    if(title==='UPDATE PRODUCT')
    {
      (async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`) 
        formik.setFieldValue("title", response.data.title)
        formik.setFieldValue("price", response.data.price)
        formik.setFieldValue("description", response.data.description)
        formik.setFieldValue("image", response.data.image)
        formik.setFieldValue("category", response.data.category)
        formik.setFieldValue("id", response.data.id)

       
    })()
    }
    
},[productId])

  return (
    <Fragment>
      
      <div className="flex justify-between w-full">
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="flex justify-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-rows-2  grid-flow-row gap-4 auto-cols-auto  items-end ">
            <div>Title</div>
            <div>
              {" "}
              <TextField
                fullWidth
                id="title"
                name="title"
                label="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </div>
            <div>Price</div>
            <div>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="price"
                type="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </div>
            <div>Description</div>
            <div>
              {" "}
              <TextField
                fullWidth
                id="description"
                name="description"
                label="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </div>
            <div>Image</div>
            <div>
              <TextField
                fullWidth
                id="image"
                name="image"
                label="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            </div>
            <div>Category</div>
            <div>
              <TextField
                fullWidth
                id="category"
                name="category"
                label="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              />
            </div>
            <div></div>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
