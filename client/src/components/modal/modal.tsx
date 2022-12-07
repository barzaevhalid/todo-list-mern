import React, {FormEvent} from 'react';
import s from "../../pages/projects/project.module.scss";

interface  IModalProps {
    setModal: (modal:  boolean) => void
    addProject: (e:FormEvent<HTMLFormElement>) => void
    setTitle: (title: string) => void
    title: string
    description: string
    setDesc: (desc: string) => void
}
const Modal:React.FC<IModalProps> = ({setModal, addProject, setTitle, title, description, setDesc}) => {
    return (
        <div className={s.modal} onClick={() => setModal(false)}>
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
    );
};

export default Modal;
