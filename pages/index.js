import NavComponent from "@/components/NavComponent";
import HomePage from "./home.js";
import { NavLink, Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavComponent />
        <HomePage />
      </div>
    </>
  );
}
