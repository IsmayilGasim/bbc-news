import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function RegisterButton() {
  // const navigate = useNavigate();
  return (
    <Button
      variant="dark"
      size="sm"
      className="m-1"
      // onClick={() => navigate("/register")}
    >
      Register
    </Button>
  );
}

export default RegisterButton;
