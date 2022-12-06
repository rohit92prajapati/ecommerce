import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function ProductDetails() {
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
    <div className="grid grid-cols-2">
      <div>
        <img
          className="h-96 w-96"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2">
        <div>Title</div>
        <div>2</div>
        <div>Category</div>
        <div>2</div>
        <div>Description</div>
        <div>2</div>
        <div>Rating</div>
        <div>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} />
          </Stack>
        </div>
      </div>
    </div>
  );
}
