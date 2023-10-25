import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "rgb(95, 158, 160)",
            "&:hover": { backgroundColor: "rgb(95, 158, 160)" },
          }}
          onClick={() => {
            localStorage.setItem("loggedIn", "true");
            navigate("/dashboard");
          }}
        >
          Login With Google
        </Button>
      </div>
    </>
  );
};
