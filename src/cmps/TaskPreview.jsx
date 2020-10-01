import React from 'react'
import EditableLabel from 'react-editable-label'


export function TaskPreview({ task, updateTask }) {

    const handleFocusOut = (key, value) => {
        const newTask = {...task, [key]: value}
        updateTask(newTask)
    }
    const getDateInStr = (timeStemp) => {
        var a = new Date(timeStemp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;

    }
    const removeTask = (taskId) => {
        console.log("removeTask -> taskId", taskId)

    }
    const startTask = (taskId) => {
        console.log("removeTask -> taskId", taskId)

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
                    initialValue={task.description}
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
                    <h5>CreatedAt:</h5>
                    <h6 className="create-and-count">{getDateInStr(task.createdAt)}</h6>
                </div>
                <div className="flex">
                    <h5>triesCount:</h5>
                    <h6 className="create-and-count">{task.triesCount}</h6>
                </div>

            </div>
            <div className="flex column space-between">
                <button onClick={() => removeTask(task._id)}>Delete</button>
                <button onClick={() => startTask(task._id)}>Start</button>
            </div>
        </div>
    )
}
