import InfoCard from "./InfoCard.tsx";
import { Typography } from "@mui/material";
import "../styles/LawyerSearchPage.css";
import Box from "@mui/material/Box";
import lawppl from '../samplejson/lawyerdata.json';
import arbitrator from '../samplejson/arbitrator.json';
interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  current_page: string;
}

const LawyerSearchPage = ({ setCurrentPage, current_page }: Props) => {
  const lawyers = lawppl;
  const arbi = arbitrator;

  const handleCardClick = () => {
    if (current_page === "detailed_view") {
      setCurrentPage("initial_view");
    } else {
      setCurrentPage("detailed_view");
    }
  };

  const CommonStyles = {
    borderRadius: "12px",
    border: "1px solid #ccc",
    overflow: "hidden",
  };

  return (
    <>
      <Box
        sx={{
          ...CommonStyles,
          border: "1px solid #ccc",
          maxHeight: "80%",
          width: "30%",
          float: "left",
          marginTop: "7%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Search</Typography>
        </Box>
        <Box></Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Filters</Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box sx={{ width: "70%", marginLeft: "30%" }}>
        <div className="tile-set">
          <h1 className="header">Lawyers</h1>
          {lawyers.map((data, index) => (
            <div className="tile" key={index}>
              <InfoCard
                onClick={handleCardClick}
                header={data.name}
                image={data.profilepic}
              >
                <Typography variant="body2" color="#0077B6">
                  {data.specialisation}
                </Typography>
              </InfoCard>
            </div>
          ))}
        </div>
      </Box>
      <Box sx={{ width: "70%", marginLeft: "30%" }}>
        <div className="tile-set">
          <h1 className="header">Arbriator</h1>
          {arbi.map((data, index) => (
            <div className="tile" key={index}>
              <InfoCard
                onClick={handleCardClick}
                header={data.name}
                image={data.profilepic}
              >
                <Typography variant="body2" color="#0077B6">
                  {data.specialisation}
                </Typography>
              </InfoCard>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default LawyerSearchPage;
