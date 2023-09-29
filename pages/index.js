import NavComponent from "@/components/NavComponent";
import HomePage from "./home.js";

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
