import { Button } from "@mui/material";

interface DownloadButtonProps {
  onClick: () => void;
  text?: string;
}

const DownloadButton = ({
  onClick,
  text = "Baixar AnyDesk",
}: DownloadButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      size="large"
      sx={{
        fontFamily: "'Noto Sans', Calibri, Arial, sans-serif",
        fontWeight: 700,
        fontSize: "1.1rem",
        lineHeight: 1.5,
        color: "#fff",
        background: "linear-gradient(135deg, #8e24aa, #7b1fa2)",
        textAlign: "center",
        whiteSpace: "nowrap",
        userSelect: "none",
        display: "inline-block",
        mt: 2,
        px: 5,
        py: 1.8,
        borderRadius: "12px",
        transition: "all 0.3s ease",
        boxShadow: "0px 4px 18px rgba(142, 36, 170, 0.5)",
        "&:hover": {
          background: "linear-gradient(135deg, #9c27b0, #6a1b9a)",
          boxShadow: "0px 6px 25px rgba(156, 39, 176, 0.6)",
          transform: "scale(1.05)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default DownloadButton;
