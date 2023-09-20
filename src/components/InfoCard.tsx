import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface ActionAreaCardProps {
  image: string;
  header: React.ReactNode;
  children: React.ReactNode;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({
  image,
  header,
  children,
}) => {
  const cardStyles = {
    maxWidth: 345,
    backgroundColor: "#DBF5FA", // Change the background color here
    color: "#03045E", // Change the foreground color here
    border: "2px solid #CAF0F8",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <Card sx={cardStyles}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Card Image"
        />
        <CardContent>
          {header && (
            <Typography gutterBottom variant="h5" component="div">
              {header}
            </Typography>
          )}
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
