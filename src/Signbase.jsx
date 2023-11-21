import React from "react";
import { Outlet } from "react-router-dom";
import Signfooter from "./Components/Signfooter";

function Signbase() {
  return (
    <>
    <Outlet/>
    <Signfooter/>
    </>
  )
}

export default Signbase