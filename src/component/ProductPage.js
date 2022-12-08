import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, filtercart } from "../redux/counterSlice";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const dispatch = useDispatch();
  const productDetails = useSelector(
    (state) => state.filterProduct.addProducts
  );
  const searchProduct = useSelector(
    (state) => state.filterProduct.searchProduct
  );
  console.log("searchProduct", searchProduct);
  console.log("redux state", productDetails);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
    })();
  }, []);
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5 p-10">
          {searchProduct.length !== 0
            ? searchProduct.map(({ id, description, image, price, title }) => {
                return (
                  <Card
                    sx={{ maxWidth: 345 }}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <CardMedia
                        component="img"
                        height="140"
                        className="h-96 p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
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
                      </CardContent>
                    </div>

                    <CardActions>
                      <Link to={`productdetails/${id}`}>
                        {" "}
                        <Button size="small">More Details</Button>
                      </Link>

                      <Button
                        size="small"
                        onClick={() => {
                          dispatch(
                            filtercart({
                              id,
                              description,
                              image,
                              price,
                              title,
                            })
                          );
                        }}
                      >
                        Add TO Cart
                      </Button>
                    </CardActions>
                  </Card>
                );
              })
            : productDetails.length !== 0
            ? productDetails.map(({ id, description, image, price, title }) => {
                return (
                  <Card
                    sx={{ maxWidth: 345 }}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <CardMedia
                        component="img"
                        height="140"
                        className="h-96 p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
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
                      </CardContent>
                    </div>

                    <CardActions>
                      <Link to={`productdetails/${id}`}>
                        {" "}
                        <Button size="small">More Details</Button>
                      </Link>

                      <Button
                        size="small"
                        onClick={() => {
                          dispatch(
                            filtercart({
                              id,
                              description,
                              image,
                              price,
                              title,
                            })
                          );
                        }}
                      >
                        Add TO Cart
                      </Button>
                    </CardActions>
                  </Card>
                );
              })
            : ""}
        </div>
      </div>
    </Fragment>
  );
}
