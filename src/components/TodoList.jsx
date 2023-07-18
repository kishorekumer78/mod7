import  {useState} from 'react';

function TodoNew() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);

    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (task.trim() !== '') {
            setTaskList([...taskList, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    const handleCompleteTask = (index) => {
        const tl = [...taskList];
        const task = tl.splice(index, 1);
        setCompletedTask([...completedTask, ...task]);
        handleDeleteTask(index);
        // console.log(task);
    }

    return (
        <div className="container mx-auto mt-8 max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <form onSubmit={handleAddTask}>
                <div className="flex items-center">
                    <input
                        type="text"
                        className="flex-grow border border-gray-400 p-2 mr-2 rounded"
                        placeholder="Enter a new task"
                        value={task}
                        onChange={handleTaskChange}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </div>
            </form>
            <ul className="mt-4">
                {taskList && taskList.map((task, index) => (
                    <li
                        key={index}
                        className="bg-amber-50 flex items-center justify-between border border-gray-400 rounded py-2 px-4 mb-2"
                    >
                        <span>{task}</span>
                        <div className="">
                            <button
                                className="hover:text-gray-700 mr-2 text-gray-600 border-2 px-2 py-1 rounded-lg border-gray-700"
                                onClick={() => handleCompleteTask(index)}
                            >
                                Completed
                            </button>
                            <button
                                className="text-red-500 hover:text-red-600 border-2 px-2 py-1 rounded-lg border-red-700"
                                onClick={() => handleDeleteTask(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {
                completedTask.length > 0 ? (
                    <div className="mt-4">
                        <h3>Completed</h3>
                        <ul>
                            {completedTask && completedTask.map((ct, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-700 flex items-center justify-between border border-gray-400 rounded py-2 px-4 mb-2"
                                >
                                    <span className="text-white line-through">{ct}</span>
                                </li>
                            ))}
                        </ul>
                    </div>) : null
            }


        </div>
    );
}

export default TodoNew;
