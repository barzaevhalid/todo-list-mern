import React from 'react';
import s from './project.module.scss'

const Project: React.FC = () => {
    return (
        <div className={s.container}>
            <h1 className={s.project__title}>Список проектов</h1>
            Создать проект
            <div className={s.project__content}>
                <div className={s.project__content_title}>Заголовок</div>
                <div className={s.project__content_description}>Описание</div>
            </div>
            <div className={s.project__content}>
                <div className={s.project__content_title}>Заголовок</div>
                <div className={s.project__content_description}>Описание</div>
            </div>
            <div className={s.project__content}>
                <div className={s.project__content_title}>Заголовок</div>
                <div className={s.project__content_description}>Описание</div>
            </div>
        </div>
    );
};

export default Project;
