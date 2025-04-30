import { Button, Box, Typography } from "@mui/material";

interface BrowserButtonProps {
  onClick: () => void;
  text: string;
  iconSrc: string;
}

const BrowserButton = ({ onClick, text, iconSrc }: BrowserButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      size="large"
      sx={{
        width: "300px",
        fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "1.1rem",
        lineHeight: 1.5,
        background: "linear-gradient(135deg, #8e24aa, #7b1fa2)",
        color: "#fff",
        px: 4,
        py: 2,
        borderRadius: "12px",
        boxShadow: "0px 4px 18px rgba(142, 36, 170, 0.5)",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(135deg, #9c27b0, #6a1b9a)",
          boxShadow: "0px 6px 25px rgba(156, 39, 176, 0.6)",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        component="img"
        src={iconSrc}
        alt={`${text} icon`}
        sx={{ width: 30, height: 30 }}
      />
      <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
        {text}
      </Typography>
    </Button>
  );
};

export default BrowserButton;
