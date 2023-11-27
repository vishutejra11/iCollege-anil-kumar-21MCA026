import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { AiFillBook } from "react-icons/ai";

const AssignTask = () => {
  const { setPaper, paperList } = useContext(UserContext);
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");

  const handleAssignTask = () => {
    // Handle assigning the task, e.g., save it to a database.
    // You can implement your own logic here.
    console.log("Task Assigned:", course, description);
  };

  return (
    <main className="paper">
      <h2 className="mb-2 mt-3 whitespace-break-spaces text-4xl font-bold text-violet-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400 md:text-6xl">
        Assign Task
      </h2>
      <section className="pt-4">
        <div className="mb-4">
          <label className="block text-xl font-semibold" htmlFor="course">
            Select Course:
          </label>
          <select
            id="course"
            className="w-full p-2 text-xl border-2 border-slate-900 rounded-md"
            onChange={(e) => setCourse(e.target.value)}
            value={course}
          >
            <option value="">Select a Course</option>
            <option value="Btech">Btech</option>
            <option value="MCA">MCA</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold" htmlFor="description">
            Task Description:
          </label>
          <textarea
            id="description"
            className="w-full p-2 text-xl border-2 border-slate-900 rounded-md"
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          className="bg-violet-200 text-xl font-semibold px-4 py-2 rounded-md hover:bg-violet-950 hover:text-slate-100"
          onClick={handleAssignTask}
        >
          Assign Task
        </button>
      </section>
    </main>
  );
};

export default AssignTask;
