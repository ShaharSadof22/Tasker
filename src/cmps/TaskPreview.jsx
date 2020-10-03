import React from 'react'
import EditableLabel from 'react-editable-label'
import moment from 'moment';


export function TaskPreview({ task, updateTask, removeTask, startTask }) {
    console.log("TaskPreview -> task", task.success)

    const handleFocusOut = (key, value) => {
        // if (key === 'importance' && (value > 3 || value < 1)) {
        //     value = 'Enter number between 1-3'
        //     console.log('hey');
        // }
        const newTask = { ...task, [key]: value }
        updateTask(newTask)
    }
    const onRemoveTask = (taskId) => {
        removeTask(taskId)
    }
    const onStartTask = (task) => {
        startTask(task)
    }

    return (
        <div className="task-preview flex space-between">
            <div className="task-details">
                <EditableLabel
                    initialValue={task.title}
                    save={value => { handleFocusOut('title', value) }}
                    inputClass='title-input'
                // labelClass='header-label-class'
                />
                <h5>Description</h5>
                <EditableLabel
                    initialValue={task.description === '' ? 'Enter description...' : task.description}
                    save={value => { handleFocusOut('description', value) }}
                    inputClass='title-input'
                // labelClass='header-label-class'
                />
                <div className="flex">
                    <h5 className="importance-label">Importance:</h5>
                    <EditableLabel
                        initialValue={task.importance}
                        save={value => { handleFocusOut('importance', value) }}
                        inputClass='title-input'
                    // labelClass='header-label-class'
                    />
                </div>
                <div className="flex">
                    <h5>Created At:</h5>
                    <h6 className="create-and-count">{moment(task.createdAt).format('LLLL')}</h6>
                </div>
                <div className="flex">
                    <h5>triesCount:</h5>
                    <h6 className="create-and-count">{task.triesCount}</h6>
                </div>

            </div>
            {task.success !== undefined &&
                <div className={`${task.success ? "done-task" : "feild-task"} task-success`}>
                    <p>{task.success ? 'Done' : 'Failed'}</p>
                </div>
            }
            <div className="flex column space-between">
                <button onClick={() => onRemoveTask(task._id)} className="remove-btn">Delete</button>
                <button onClick={() => onStartTask(task)} className="start-btn">Start</button>
            </div>
        </div>
    )
}
