import { Button } from "@material-tailwind/react";
import React from "react";
import api from "../../utils/api";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      api
        .get("/user/logout")
        .then((res) => {
          dispatch(logout());
          localStorage.removeItem("authToken");
          window.location.href = "/login";
        })
        .catch((error) => {
          console.log("Error while logging out:", error);
        });
    } catch (error) {
      console.error("Error while logging out:", error);
    }
  };

  return (
    <div className="h-96 bg-gray-100 ">
      <h1 className="text-6xl font-bold text-red-400">Home</h1>

      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default Home;
