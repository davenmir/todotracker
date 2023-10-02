import NavComponent from "@/components/NavComponent";
import TodoComponent from "@/components/ToDoComponent";
import styles from "../../styles/todo.module.css"

export default function Todo() {
  return (
    <>
      <NavComponent />
      <div className={styles.spacer}>
        <TodoComponent />
      </div>
    </>
  );
}
