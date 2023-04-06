import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { State } from "../../Component/CommonInterface/CommonInterface";
import { useParams } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const AddUser = () => {
  const params = useParams();
  const id:any= params.id;
  const [state, setState] = useState<State>({
    name: "",
    email: "",
  });
  const [data, setData] = useState<State[]>([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userData") as any);
    if (items) {
      setData(items);
    }
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      data.splice(id, 1, state);
    } else {
      data.push(state);
    }
    setData(data);
    setState({
      ...state,
      name: "",
      email: "",
    });
    localStorage.setItem("userData", JSON.stringify(data));
  };
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("userData") as any);
    if (id !== undefined) {
      var obj = item[id];
      setState({
        name: obj.name,
        email: obj.email,
      });
    }
  }, [id]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Users
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name Address"
                name="name"
                autoComplete="name"
                autoFocus
                type="text"
                value={state.name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="text"
                value={state.email}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Submit 
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserName">Name </label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Enter User Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Enter Email Id"
          />
        </div>

        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
};

export default AddUser;
