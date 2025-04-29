import { Box, Typography } from "@mui/material";

interface StepTextProps {
  text: React.ReactNode;
}

const StepText = ({ text }: StepTextProps) => {
  return (
    <Box sx={{ width: "90%", px: 5 /* padding horizontal */ }}>
      <Typography
        variant="body1"
        sx={{
          mb: "3.5%",
          display: "flex",
          justifyContent: "flex-start",
          bgcolor: "#6a1b9a",
          borderRadius: "5px",
          fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
          padding: "20px",
          fontSize: "150%",
          color: "white",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StepText;
