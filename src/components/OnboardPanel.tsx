import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonComp from "../components/ButtonComp";

const CommonStyles = {
  borderRadius: "12px",
  border: "1px solid #ccc",
  overflow: "hidden",
  maxWidth: "auto",
  margin: "auto",
  position: "relative",
};

const handleOnClick = () => {
  //Change Login Page
};

const OnboardPanel = () => {
  return (
    <Box
      sx={{
        ...CommonStyles,
        p: 2,
        flex: 1,
        backgroundColor: "#00B4D8",
        marginTop: "12px",
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center ", marginLeft: "20px" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Ubuntu",
            color: "#03045E",
            marginRight: "24px",
          }}
        >
          Join us
        </Typography>
        <Box
          sx={{
            padding: "12px",
            fontFamily: "Ubuntu",
            fontSize: "1.2rem",
            backgroundColor: "#00B4D8",
            marginTop: "15px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#00B4D8",
            }}
          >
            <ButtonComp
              buttonText="Lawyers Click Here!"
              onClick={handleOnClick}
            />
            <Box sx={{ width: "8px" }} />
            <ButtonComp
              buttonText="Client Click Here!"
              onClick={handleOnClick}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardPanel;
