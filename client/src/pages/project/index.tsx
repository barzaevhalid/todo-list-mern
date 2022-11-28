import React from 'react';
import s from './project.module.scss'
const projects = [
    {
        id: 1,
        title: "todo",
        description: "Проект туду листа для линого пользования"
    },
    {   id: 2,
        title: "Онлайн магазин",
        description: "Магазин для телефонных аксессуаров"
    }
]
const Project: React.FC = () => {
    return (
        <div className={s.container}>
            {
                projects.map(({title, description}) => {
                    return (
                        <div>
                           <div>{title}</div>
                            <div>{description}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Project;
