import { Typography, Box } from "@mui/material";

interface InstructTextProps {
  variant?: any;
}

const CustomInstructText = ({ variant = "h3" }: InstructTextProps) => {
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
          background: "linear-gradient(45deg, #ef443b, #EE8D3B)",
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

export default CustomInstructText;
