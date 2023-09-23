import InfoCard from "./InfoCard.tsx";
import { Typography } from "@mui/material";
import "../styles/LawyerSearchPage.css";
import Box from "@mui/material/Box";
import Searchable from "./Searchable.tsx";
import Choosable from "./Choosable.tsx";
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
          height: "80%",
          width: "35%",
          float: "left",
          marginTop: "1%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3%",
            marginBottom: "6%", // Adjust margin bottom as needed
          }}
        >
          <Typography variant="h5">Search</Typography>
        </Box>
        <Box>
          <Searchable categoryName="Name"></Searchable>
          <Searchable categoryName="Location"></Searchable>
          <Searchable categoryName="Rating"></Searchable>
          <Searchable categoryName="Price"></Searchable>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
        >
          <Typography variant="h5">Filters</Typography>
        </Box>
        <Box>
          <Choosable
            categoryName={"Specialization"}
            choices={[
              "Lawyer",
              "Arbiarator",
              "Mediator",
              "Notary",
              "Document Writer",
            ]}
          ></Choosable>
          <Choosable
            categoryName={"Experience"}
            choices={[
              "2+ Years",
              "5+ Years",
              "8+ Years",
              "10+ Years",
              "15+ Years",
            ]}
          ></Choosable>
          <Choosable
            categoryName={"Accept Pro-bono cases"}
            choices={["Yes", "No"]}
          ></Choosable>
        </Box>
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
