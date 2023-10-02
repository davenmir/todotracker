import NavComponent from "@/components/NavComponent";
import HomePage from "./home/index.js";

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
