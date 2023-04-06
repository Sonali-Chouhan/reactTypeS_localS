import React, { useEffect, useState } from "react";
import { State } from "../../Component/CommonInterface/CommonInterface";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Users.css"

const ListUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<State[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userData") as any);
    if (items) {
      setData(items);
    }
  }, []);
  const handleDelete = (index: number) => {
    var item = JSON.parse(localStorage.getItem("userData") as any);
    item.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(item));
    setData(item);
  };

  return (
    <div className="tableDiv">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <IconButton
                      color="primary"
                      aria-label="Edit"
                      component="label"
                      onClick={() => navigate(`/addUser/${index}`)}
                    >
                      <ModeEditOutlineIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="Delete"
                      component="label"
                      onClick={() => handleDelete(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListUser;
