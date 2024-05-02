"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 250,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      width: 450,
    },
  ];

  return (
    <Box>
      <Typography variant="h3" className="header">
        Product details
      </Typography>
      <Box className="container">
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
export default Home;
