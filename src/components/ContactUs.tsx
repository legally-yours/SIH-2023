import Box from "@mui/material/Box";
import "font-awesome/css/font-awesome.min.css";
import Typography from "@mui/material/Typography";

const CommonStyles = {
  borderRadius: "12px",
  border: "1px solid #ccc",
  overflow: "hidden",
  maxWidth: "80%",
  margin: "auto",
  position: "relative",
};

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          ...CommonStyles,
          p: 2,
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: "12px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          display: "flex",
        }}
      >
        <Box sx={{ mb: 3, padding: "12px" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Ubuntu",
              color: "#023E8A",
              display: "flex",
              justifyContent: "center",
              fontWeight: "medium-bold",
              lineHeight: 1.5, 
              padding: 0/2, 
              textDecoration: "underline",
              textDecorationThickness: 2.5,
              
              
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              borderRadius: "10px",
              padding: "15px",
              fontFamily: "Ubuntu",
              fontSize: "1.2rem",
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid #ccc",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Offices:
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  VIT Chennai
                </Typography>
                <Typography variant="body1">
                  Vellore Institute of Technology (VIT) Chennai Campus
                  Vandalur-Kelambakkam Road, Rajan Nagar, Chennai, Tamil Nadu
                  600127 India
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                marginLeft: "20px",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", mt:2, }}>
                  Contact Info:
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem", mt: 2, }}
                >
                  <i className="fa fa-phone"></i> <span>+91 98765 43210</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
                >
                  <i className="fa fa-phone"></i> <span>+91 77065 83212</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
                >
                  <i className="fa fa-phone"></i> <span>+91 94555 63213</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
                >
                  <i className="fa fa-envelope"></i>{" "}
                  <span>legallyYours@official.in</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1em" }}>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1OJVHhWig42FoiXy6Tw5r00PkkzJrtmQ&ehbc=2E312F&noprof=1"
          width="82%"
          height="480"
        ></iframe>
      </Box>
    </>
  );
};

export default ContactUs;
