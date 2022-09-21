import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, currentTask, handleDelete }) {
	//const [useTasks, setTasks] = useState(tasks);

	// function handleDelete(element) {
	// 	//console.log(element);
	// 	const updatedTasks = useTasks.filter((task) =>
	// 		task.text !== element ? task : false
	// 	);
	// 	setTasks(updatedTasks);
	// }
	const renderTasks = tasks
		.filter((item) => {
			if (currentTask === "All") {
				return true;
			} else {
				return item.category === currentTask;
			}
		})
		.map((task, index) => {
			return (
				<Task
					key={index}
					text={task.text}
					category={task.category}
					handleDelete={handleDelete}
				/>
			);
		});

	return (
		<div className="tasks">
			{/* display a list of tasks using Task component */}
			{renderTasks}
		</div>
	);
}

export default TaskList;