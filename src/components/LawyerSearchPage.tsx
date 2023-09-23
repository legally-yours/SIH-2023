import InfoCard from "./InfoCard.tsx";
import { Typography } from "@mui/material";
import "../styles/LawyerSearchPage.css";
import Box from "@mui/material/Box";
// import Searchable from "./Searchable.tsx";
import Choosable from "./Choosable.tsx";
import lawppl from '../samplejson/lawyerdata.json';
import arbitrator from '../samplejson/arbitrator.json';
import { useState } from "react";
interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  current_page: string;
}

const LawyerSearchPage = ({ setCurrentPage, current_page }: Props) => {
  const lawyers = lawppl;
  const arbi = arbitrator;
  const [choice, setChoice] = useState("");

  const handleCardClick = () => {
    if (current_page === "detailed_view") {
      setCurrentPage("initial_view");
    } else {
      setCurrentPage("detailed_view");
    }
  };

  const clickFilter = (id : string) => {
    setChoice(id);
  }

  const CommonStyles = {
    borderRadius: "12px",
    border: "1px solid #ccc",
    overflow: "hidden",
  };
  
  if (choice == "" || choice == "Yes") {
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
    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
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

</>
    );
  } else if (choice == "Lawyer") {
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

          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
          >
            <Typography variant="h5">Filters</Typography>
          </Box>
          <Box>
          <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
            <Choosable
              categoryName={"Specialization"}
              choices={[
                "Lawyer",
                "Arbiarator",
                "Mediator",
                "Notary",
                "Document Writer",
              ]}
              onClick={clickFilter}
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
              onClick={clickFilter}
            ></Choosable>
            <Choosable
              categoryName={"Accept Pro-bono cases"}
              choices={["Yes", "No"]}
              onClick={clickFilter}
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
      </>
    );
  } else if (choice == "Arbiarator") {
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

          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
          >
            <Typography variant="h5">Filters</Typography>
          </Box>
          <Box>
          <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
            <Choosable
              categoryName={"Specialization"}
              choices={[
                "Lawyer",
                "Arbiarator",
                "Mediator",
                "Notary",
                "Document Writer",
              ]}
              onClick={clickFilter}
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
              onClick={clickFilter}
            ></Choosable>
            <Choosable
              categoryName={"Accept Pro-bono cases"}
              choices={["Yes", "No"]}
              onClick={clickFilter}
            ></Choosable>
          </Box>
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
  } else if (choice == "No") {
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
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
          >
            <Typography variant="h5">Filters</Typography>
          </Box>
          <Box>
          <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
            <Choosable
              categoryName={"Specialization"}
              choices={[
                "Lawyer",
                "Arbiarator",
                "Mediator",
                "Notary",
                "Document Writer",
              ]}
              onClick={clickFilter}
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
              onClick={clickFilter}
            ></Choosable>
            <Choosable
              categoryName={"Accept Pro-bono cases"}
              choices={["Yes", "No"]}
              onClick={clickFilter}
            ></Choosable>
          </Box>
        </Box>
        <div className="fixingbroken">Sorry, no results found!</div>
      </>
    );
  } else if (choice == "Mediator" ||
  choice == "Notary" ||
  choice == "Document Writer") {
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
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
          >
            <Typography variant="h5">Filters</Typography>
          </Box>
          <Box>
          <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
            <Choosable
              categoryName={"Specialization"}
              choices={[
                "Lawyer",
                "Arbiarator",
                "Mediator",
                "Notary",
                "Document Writer",
              ]}
              onClick={clickFilter}
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
              onClick={clickFilter}
            ></Choosable>
            <Choosable
              categoryName={"Accept Pro-bono cases"}
              choices={["Yes", "No"]}
              onClick={clickFilter}
            ></Choosable>
          </Box>
        </Box>
        <div className="fixingbroken">Sorry, no results found!</div>
      </>
    );
  } else if (choice == "2+ Years") {
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

          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
          >
            <Typography variant="h5">Filters</Typography>
          </Box>
          <Box>
          <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
            <Choosable
              categoryName={"Specialization"}
              choices={[
                "Lawyer",
                "Arbiarator",
                "Mediator",
                "Notary",
                "Document Writer",
              ]}
              onClick={clickFilter}
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
              onClick={clickFilter}
            ></Choosable>
            <Choosable
              categoryName={"Accept Pro-bono cases"}
              choices={["Yes", "No"]}
              onClick={clickFilter}
            ></Choosable>
          </Box>
        </Box>

        <Box sx={{ width: "70%", marginLeft: "30%" }}>
          <div className="tile-set">
            <h1 className="header">Lawyers</h1>
            {lawyers.filter((data) => data.experience > 2).map((data, index) => (
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
            {arbi.filter((data) => data.experience > 2).map((data, index) => (
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
  } else if (choice == "5+ Years") {
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
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
      >
        <Typography variant="h5">Filters</Typography>
      </Box>
      <Box>
      <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
        <Choosable
          categoryName={"Specialization"}
          choices={[
            "Lawyer",
            "Arbiarator",
            "Mediator",
            "Notary",
            "Document Writer",
          ]}
          onClick={clickFilter}
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
          onClick={clickFilter}
        ></Choosable>
        <Choosable
          categoryName={"Accept Pro-bono cases"}
          choices={["Yes", "No"]}
          onClick={clickFilter}
        ></Choosable>
      </Box>
    </Box>

    <Box sx={{ width: "70%", marginLeft: "30%" }}>
      <div className="tile-set">
        <h1 className="header">Lawyers</h1>
        {lawyers.filter((data) => data.experience > 5).map((data, index) => (
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
        {arbi.filter((data) => data.experience > 5).map((data, index) => (
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
}else if (choice == "8+ Years") {
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
    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.experience > 8).map((data, index) => (
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
      {arbi.filter((data) => data.experience > 8).map((data, index) => (
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
}else if (choice == "10+ Years") {
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

    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.experience > 10).map((data, index) => (
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
      {arbi.filter((data) => data.experience > 10).map((data, index) => (
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
}else if (choice == "15+ Years") {
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

    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.experience > 15).map((data, index) => (
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
      {arbi.filter((data) => data.experience > 15).map((data, index) => (
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
} else if (choice == "Bangalore") {
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
    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.location.includes("Bangalore")).map((data, index) => (
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
      {arbi.filter((data) => data.location.includes("Bangalore")).map((data, index) => (
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
} else if (choice == "Chennai") {
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
    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.location.includes("Chennai")).map((data, index) => (
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
      {arbi.filter((data) => data.location.includes("Chennai")).map((data, index) => (
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
}else if (choice == "Delhi") {
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
    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.location.includes("Delhi")).map((data, index) => (
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
      {arbi.filter((data) => data.location.includes("Delhi")).map((data, index) => (
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
}else if (choice == "Mumbai") {
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
    </Box>
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
    >
      <Typography variant="h5">Filters</Typography>
    </Box>
    <Box>
    <Choosable
    categoryName={"Location"}
    choices={[
      "Bangalore",
      "Delhi",
      "Mumbai",
      "Chennai",
    ]}
    onClick={clickFilter}></Choosable>
      <Choosable
        categoryName={"Specialization"}
        choices={[
          "Lawyer",
          "Arbiarator",
          "Mediator",
          "Notary",
          "Document Writer",
        ]}
        onClick={clickFilter}
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
        onClick={clickFilter}
      ></Choosable>
      <Choosable
        categoryName={"Accept Pro-bono cases"}
        choices={["Yes", "No"]}
        onClick={clickFilter}
      ></Choosable>
    </Box>
  </Box>

  <Box sx={{ width: "70%", marginLeft: "30%" }}>
    <div className="tile-set">
      <h1 className="header">Lawyers</h1>
      {lawyers.filter((data) => data.location.includes("Mumbai")).map((data, index) => (
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
      {arbi.filter((data) => data.location.includes("Mumbai")).map((data, index) => (
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
}
};

export default LawyerSearchPage;
