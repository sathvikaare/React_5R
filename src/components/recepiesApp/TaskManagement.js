import React, { useState } from 'react';
import "./taskManagement.css"
import NavbarRecepies from './recepiesNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskManagement = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Top Priority');
  const [deadline, setDeadline] = useState('');
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All Priorities');

  const handleAddTask = () => {
    if (task && priority && deadline) {
      setTasks([...tasks, { task, priority, deadline, completed: false }]);
      setTask('');
      setPriority('Top Priority');
      setDeadline('');
      toast.success("Task Added Successfully !");
    }
    else{
      toast.warning("Some fields are Empty!");
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) => {
      if (i === index) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(t =>
    t.task.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'All Priorities' || t.priority === filter)
  );

  return (
    <div>
        <NavbarRecepies/>
    <div className="task-manager">
    <h2>Task Management</h2>
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Top Priority">Top Priority</option>
        <option value="Medium Priority">Medium Priority</option>
        <option value="Low Priority">Low Priority</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleAddTask} >Add Task</button>
      <ToastContainer />
    </div>
    <div className="filter-group">
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All Priorities">All Priorities</option>
        <option value="Top Priority">Top Priority</option>
        <option value="Medium Priority">Medium Priority</option>
        <option value="Low Priority">Low Priority</option>
      </select>
    </div>
    <div className="task-list">
      <h3>Upcoming Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.filter(t => !t.completed).map((t, index) => (
            <tr key={index}>
              <td>{t.task}</td>
              <td>{t.priority}</td>
              <td>{t.deadline}</td>
              <td>
                <button onClick={() => handleCompleteTask(index)}>Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="task-list">
      <h3>Completed Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.filter(t => t.completed).map((t, index) => (
            <tr key={index}>
              <td>{t.task}</td>
              <td>{t.priority}</td>
              <td>{t.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div></div>
    
  );
};

export default TaskManagement;
