import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetails() {
  const { id } = useParams();
  console.log("in", id);
  const [productDetails, setProductDetails] = useState([]);
  console.log("productDetails", productDetails);

  useEffect(() => {
    if (id) {
      (async () => {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProductDetails([response.data]);
      })();
    }
    console.log("out");
  }, []);
  var data = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <div className=" p-10">
      {productDetails.length !== 0
        ? productDetails.map((el) => {
            return (
              <div className="grid grid-cols-2">
                <div>
                  <img className="h-96 w-96" src={el.image} alt="" />
                </div>
                <div className="grid grid-cols-2">
                  <div>Title</div>
                  <div>{el.title}</div>
                  <div>Category</div>
                  <div>{el.category}</div>
                  <div>Description</div>
                  <div>{el.description}</div>
                  <div>Price</div>
                  <div>{el.price}</div>
                  <div>Rating</div>
                  <div>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={el.rating.rate}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
