import { Box, Typography } from "@mui/material";

interface SubtitleProps {
  text: string;
}

const SubtitleText = ({ text }: SubtitleProps) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="body1"
        sx={{
          mt: "2%",
          mb: "2%",
          display: "flex",
          justifyContent: "flex-start",
          borderRadius: "5px",
          fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
          padding: "5px",
          fontSize: "150%",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SubtitleText;
