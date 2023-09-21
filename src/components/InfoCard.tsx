import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface ActionAreaCardProps {
  image: string;
  header: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({
  image,
  header,
  children,
  onClick,
}) => {
  const cardStyles = {
    maxWidth: 345,
    backgroundColor: "#DBF5FA",
    color: "#03045E",
    border: "2px solid #CAF0F8",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <Card sx={cardStyles}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Card Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
