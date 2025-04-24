import { Button } from "@mui/material";

interface CustomDownloadButtonProps {
  onClick: () => void;
  text?: string;
}

const CustomDownloadButton = ({
  onClick,
  text = "Baixar AnyDesk",
}: CustomDownloadButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      size="large"
      sx={{
        fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        lineHeight: 1.5,
        color: "#fff",
        background: "linear-gradient(45deg, #ef443b, #EE8D3B)",
        textAlign: "center",
        whiteSpace: "nowrap",
        userSelect: "none",
        display: "inline-block",
        mt: 2,
        px: 4,
        py: 1.5,
        borderRadius: "8px",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(45deg, #EE8D3B, #ef443b)",
          boxShadow: "0px 4px 15px rgba(239, 68, 59, 0.4)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomDownloadButton;
