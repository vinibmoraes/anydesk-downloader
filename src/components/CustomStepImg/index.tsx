import { Box } from "@mui/material";

interface StepImgProps {
  src: string;
  height?: string | number;
}

const StepImg = ({ src, height }: StepImgProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: "2px",
        mb: "2.5%",
      }}
    >
      <img
        src={src}
        style={{
          height: height || "auto",
          width: "auto",
          maxWidth: "100%",
          borderRadius: "5px",
        }}
      />
    </Box>
  );
};

export default StepImg;
