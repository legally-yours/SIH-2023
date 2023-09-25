import React, { ChangeEvent, FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../styles/MiscStyles.css";
import "../styles/index.css";

const LawyerSignUp: React.FC = () => {
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      //console.log("Form Data:", formData); // Debugging statement to check formData

      const response = await fetch("http://localhost:5000/api/lawyer/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Form submitted:", data); // Debugging statement to check response data
    } catch (error) {
      console.error("Error:", error);
    }
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
              Sign up as a lawyer
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
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
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Location"
                variant="outlined"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Specialization"
                variant="outlined"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Aadhar Number"
                variant="outlined"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <button className="submit" type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LawyerSignUp;
