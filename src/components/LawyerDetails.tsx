import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
import ButtonComp from "../components/ButtonComp";
=======
import Button from "@mui/material/Button";
>>>>>>> b4d33729a85bb6c40d20de6d97e6ecaa07762b98
import EmptyImage from "../assets/EmptyImage.png";
<<<<<<< HEAD
=======
import Calendar from "./Calender";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <Button
    variant="outlined"
    color="primary"
    size="small"
    sx={{
      position: "absolute",
      top: "8px",
      right: "8px",
      color: "#023E8A",
      borderColor: "#023E8A",
      "&:hover": {
        backgroundColor: "#023E8A",
        color: "#FFFFFF",
      },
    }}
    onClick={onClick}
  >
    Back
  </Button>
);
>>>>>>> cf73a10a421111887b3126eccb513762a264419c

interface LawyerDetailsProps {
  current_page: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  details: {
    name: string;
    contact: string;
    probono: string;
    specialization: string;
    location: string;
    experience: string;
    price: string;
    rating: string;
    description: string;
  };
}

const CommonStyles = {
  borderRadius: "12px",
  border: "1px solid #ccc",
  overflow: "hidden",
  maxWidth: "80%",
  margin: "auto",
  position: "relative",
};

const PriceRatingStyles = {
  fontSize: { xs: "0.9rem", md: "1.2rem" },
  color: "#0077B6",
  fontFamily: "Ubuntu",
};

const LawyerDetails: React.FC<LawyerDetailsProps> = ({
  current_page,
  setCurrentPage,
  details,
}) => {
  const handleBackClick = () => {
    setCurrentPage("search");
  };

  var cp = current_page;
  var cpp = cp;
  var cp = cpp;
  
  return (
    <>
      <Box sx={{ display: "flex", ...CommonStyles }}>
        <ButtonComp onClick={handleBackClick} buttonText="Back" />

        <Box
          sx={{
            flexShrink: 0,
            width: "30%",
            backgroundColor: "#DBF5FA",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: "80%",
              backgroundColor: "#DBF5FA",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "150px", // Set a minimum width to reduce the size
            }}
          >
            <img
              src={EmptyImage}
              alt={EmptyImage}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>

          <Typography variant="body1" sx={PriceRatingStyles}>
            Price per hour: {details.price} | Rating: {details.rating}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            flex: 1,
            backgroundColor: "#FFFFFF",
            marginTop: "12px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontFamily: "Ubuntu",
              fontSize: "1.5rem",
              color: "#023E8A",
            }}
          >
            {details.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Contact: {details.contact}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Specialization: {details.specialization}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Location: {details.location}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Experience: {details.experience}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Pro Bono Cases Done: {details.probono}
          </Typography>
          <Button sx={{'background-color': '#FFDFDF'}}>Book Pro Bono Case</Button>
        </Box>
      </Box>
      <Box
        sx={{
          ...CommonStyles,
          p: 2,
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: "12px",
          marginBottom: "12px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        <Box sx={{ mb: 3, padding: "12px" }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Ubuntu", color: "#023E8A" }}
          >
            About
          </Typography>
          <Box
            sx={{
              borderRadius: "8px",
              padding: "12px",
              fontFamily: "Ubuntu",
              fontSize: "1.2rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography variant="body1">{details.description}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
          ...CommonStyles,
          display: 'flex',
          p: 2,
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: "12px",
          marginBottom: "12px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Calendar date={new Date()}></Calendar>
      </Box>
    </>
  );
};

export default LawyerDetails;
