import Button from "@mui/material/Button";

interface ButtonCompProps {
  onClick: () => void;
  buttonText: String;
}

const ButtonComp: React.FC<ButtonCompProps> = ({ onClick, buttonText }) => (
  <Button
    variant="outlined"
    color="primary"
    size="small"
    sx={{
      color: "#023E8A",
      borderColor: "#023E8A",
      "&:hover": {
        backgroundColor: "#023E8A",
        color: "#FFFFFF",
      },
    }}
    onClick={onClick}
  >
    {buttonText}
  </Button>
);

export default ButtonComp;
