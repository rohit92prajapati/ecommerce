import React, { Fragment, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddProduct from "./AddProduct";
import { useSelector, useDispatch } from "react-redux";
import { filteraddProduct, filterclearProduct } from "../redux/counterSlice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AdminPage() {
  useEffect(() => {
    (async () => {
      if (addProduct.length === 0) {
        axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            dispatch(filteraddProduct(response.data));
          })
          .catch((err) => console.log("API ERRoR", err));
      }
    })();
  }, []);
  const dispatch = useDispatch();
  const addProduct = useSelector((state) => state.filterProduct.addProducts);
  const [productId, setProductId] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");

  const deletProduct = async (id) => {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${id}`
    );
    console.log("delete", response.data);
    const deletdProduct = addProduct
      .map((el) => {
        if (el.id != id) {
          return el;
        }
      })
      .filter((n) => n);
    console.log("updatedProduct", deletdProduct);
    dispatch(filterclearProduct());
    dispatch(filteraddProduct(deletdProduct));
  };

  console.log(("add", addProduct));
  return (
    <Fragment>
      <div className="p-10">
        <div>
          <Typography variant="h4" component="h4" className="mb-5">
            Admin Panel
          </Typography>
          <hr></hr>
        </div>
        <div className="flex justify-end">
          {" "}
          <Button
            variant="text"
            onClick={() => {
              setTitle("ADD PRODUCT");
              handleOpen();
            }}
          >
            Add Product
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>A basic table example with a caption</caption>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addProduct.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">{row.image}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="text"
                      onClick={() => {
                        setTitle("UPDATE PRODUCT");
                        setProductId(row.id);
                        handleOpen();
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="text"
                      onClick={() => {
                        deletProduct(row.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct
            onClose={handleClose}
            title={title}
            productId={productId}
          />
        </Box>
      </Modal>
    </Fragment>
  );
}
