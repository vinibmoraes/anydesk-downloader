import { Typography, Box } from "@mui/material";

interface InstructTextProps {
  variant?: any;
}

const InstructText = ({ variant = "h3" }: InstructTextProps) => {
  return (
    <Typography
      variant={variant}
      gutterBottom
      sx={{
        fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
        fontWeight: 200,
        fontSize: "1.5rem",
        lineHeight: 1.1,
        color: "inherit",
        display: "block",
        textAlign: "left",
        mb: 4,
      }}
    >
      Clique no botão abaixo para iniciar o download do{" "}
      <Box
        component="span"
        sx={{
          background: "linear-gradient(135deg, #9c27b0, #6a1b9a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          fontSize: "inherit",
          lineHeight: 1.1,
          fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
        }}
      >
        AnyDesk!
      </Box>
    </Typography>
  );
};

export default InstructText;
