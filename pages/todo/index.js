import NavComponent from "@/components/NavComponent";
import TodoComponent from "@/components/ToDoComponent";

export default function Todo() {
  return (
    <>
      <div className="container">
        <NavComponent />
        <TodoComponent />
      </div>
    </>
  );
}
