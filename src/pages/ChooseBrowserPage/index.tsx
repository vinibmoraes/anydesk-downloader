import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import BrowserButton from "../../components/CustomButtonSelectNavigator/index";

const ChooseBrowserPage = () => {
  const navigate = useNavigate();

  const handleChoice = (browser: string) => {
    navigate(`/steps/${browser}`);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #ede7f6, #ffffff)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Qual navegador você está usando?
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        <BrowserButton
          text="Microsoft Edge"
          iconSrc="/assets/icons/edgeIcon.png"
          onClick={() => navigate("/AnyDeskEdge")}
        />
        <BrowserButton
          text="Google Chrome"
          iconSrc="/assets/icons/chromeIcon.png"
          onClick={() => navigate("/AnyDeskChrome")}
        />
        <BrowserButton
          text="Opera"
          iconSrc="/assets/icons/operaIcon.png"
          onClick={() => navigate("/AnydeskOpera")}
        />
        <BrowserButton
          text="Outro"
          iconSrc="/assets/icons/outrosNavegadoresIcon.png"
          onClick={() => navigate("/AnydeskGeneric")}
        />
      </Box>
    </Box>
  );
};

export default ChooseBrowserPage;
