import React, {FormEvent, FormEventHandler, useEffect, useState} from 'react';
import s from './project.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {asyncAddProjects, asyncRemoveProject, asyncSetProjects} from "../../redux/store/reducers/projectReducer";
import remove from "../../Assets/remove.png"
import Modal from "../../components/modal/modal";
import {useAppSelector} from "../../hooks";
const Project: React.FC = () => {
    const {projects, loading, message} = useAppSelector(state => state.projectReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncAddProjects())

    },[])

    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const [modal, setModal] = useState<boolean>(false)

    const addProject = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setModal(false)
        dispatch(asyncSetProjects({title, description}))
    }
    const removeProject = (id: string) => {
        dispatch(asyncRemoveProject(id))

    }
    return (
        <div className={s.container}>
            <h1 className={s.title}>Список проектов</h1>
            <button className={s.project_add_btn} onClick={() => setModal(true)}>Добавить проект</button>
            {modal && <Modal setDesc={setDesc} setModal={setModal} addProject={addProject} setTitle={setTitle} title={title} description={description}/>}
            {loading && <div>Загрузка</div> }
            {projects.map((project) => {
                return <div key={project._id} className={s.project}>
                    <div className={s.project__content}>
                        <div className={s.project__content_text}>
                            <div className={s.project__title}>{project.title}</div>
                            <div className={s.project__description}>{project.description}</div>
                        </div>
                        <button className={s.project__fix}>Изменить</button>
                    </div>
                    <button className={s.project__removeBtn} onClick={() => removeProject(project._id)}><img src={remove} alt=""/></button>
                </div>
            })}
        </div>
    );
};

export default Project;
