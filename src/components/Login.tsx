import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../styles/MiscStyles.css";
import "../styles/index.css";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Login = ( {setCurrentPage} : Props) => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
    location: "",
    specialization: "",
    aadharNumber: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setCurrentPage("home");
  };

  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                m: 3,
                color: "#03045E",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <button className="submit" type="submit" onClick={handleSubmit}>
                  Login
                </button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
