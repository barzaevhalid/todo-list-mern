import React, {FormEvent, FormEventHandler, useEffect, useState} from 'react';
import s from './project.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {asyncAddProjects, asyncSetProjects} from "../../redux/store/reducers/projectReducer";

const Project: React.FC = () => {
    //@ts-ignore
    const projects:[] = useSelector(state => state.projects.projects)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncAddProjects())
    },[])

    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const [modal, setModal] = useState(false)

    const addProject = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setModal(false)
        dispatch(asyncSetProjects({title, description}))
    }
    return (
        <div className={s.container}>
            <h1 className={s.title}>Список проектов</h1>
            <button className={s.project_add_btn} onClick={() => setModal(true)}>Добавить проект</button>
            {modal && <div className={s.modal} onClick={() => setModal(false)}>
                <div className={s.popup}>
                    <div className={s.popup__title}></div>
                    <form
                        className={s.popup__form}
                        onClick={(e) => e.stopPropagation() }
                        onSubmit={(e:FormEvent<HTMLFormElement>) => addProject(e)}>
                        <label>
                            Введите название проекта
                            <input
                                type="text"
                                className={s.popup__project_name}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </label>
                            <div>Введите описание проекта</div>
                            <textarea className={s.popup__description} value={description} onChange={(e) => setDesc(e.target.value)}></textarea>

                        <button className={s.popup__button} type={"submit"}>Создать</button>
                    </form>
                </div>
            </div>
            }
            {projects && projects.map((i:any) => {
                return <div key={i._id}>{i.title}</div>
            })}
        </div>
    );
};

export default Project;
