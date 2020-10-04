import React from 'react'
import EditableLabel from 'react-editable-label'
import moment from 'moment';
import { MdSubtitles } from 'react-icons/md';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { BsFillBarChartFill } from 'react-icons/bs';
import { MdTimer } from 'react-icons/md';
import { BsArrowCounterclockwise } from 'react-icons/bs';


export function TaskPreview({ task, updateTask, removeTask, startTask }) {

    const handleFocusOut = (key, value) => {
        const newTask = { ...task, [key]: value }
        updateTask(newTask)
    }
    const onRemoveTask = (taskId) => {
        removeTask(taskId)
    }
    const onStartTask = (task) => {
        if (task.success) return;
        startTask(task)
    }

    return (
        <div className="task-preview flex space-between">
            <div className="task-details">
                <section className="flex">
                    <MdSubtitles className="icons" />
                    <EditableLabel
                        initialValue={task.title}
                        save={value => { handleFocusOut('title', value) }}
                        inputClass='title-input'
                    />

                </section>

                <h5 className="header-span"><AiOutlineAlignRight className="icons " /> Description</h5>
                <div className="description-container">
                    <EditableLabel
                        initialValue={task.description === '' ? 'Enter description...' : task.description}
                        save={value => { handleFocusOut('description', value) }}
                        inputClass='title-input'
                    />
                </div>
                <div className="flex">
                    <h5 className="importance-label header-span"><BsFillBarChartFill className="icons" />Importance:</h5>
                    <EditableLabel
                        initialValue={task.importance}
                        save={value => { handleFocusOut('importance', value) }}
                        inputClass='title-input'
                    />
                </div>
                <div className="flex">
                    <h5 className="header-span"><MdTimer className="icons" />CreatedAt:</h5>
                    <h6 className="create-and-count">{moment(task.createdAt).format('LLLL')}</h6>
                </div>
                <div className="flex">
                    <h5 className="header-span"><BsArrowCounterclockwise className="icons" />triesCount:</h5>
                    <h6 className="create-and-count">{task.triesCount}</h6>
                </div>
            </div>

            <div className="flex btn-container">
                {task.success !== undefined &&
                    <div className={`${task.success ? "done-task" : "feild-task"} task-success flex column justify-center`}>
                        <p>{task.success ? 'Done' : 'Failed'}</p>
                    </div>
                }
                <div className="flex column space-between">
                    <button onClick={() => onRemoveTask(task._id)} className="remove-btn btn">Delete</button>
                    <button onClick={() => onStartTask(task)} className="start-btn btn">Start</button>
                </div>
            </div>
        </div >
    )
}
