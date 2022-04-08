import Styles from "./CognitiveTechnologies.module.css";
import Background from "../../img/CognitiveTechnologies/Background.png";

const CognitiveTechnologies = () => {
    return (
        <div className={Styles.CognitiveTechnologies}>
            <img alt="фон" src={Background} className={Styles.Background} />
            <h1 className={Styles.Title}>
                <span className={Styles.BoldText}>Когнитивные технологии,</span>{" "}
                машинное обучение
            </h1>
            <p className={Styles.Subtitle}>
                Системы прикладного искусственного интелекта
            </p>
            <button className={Styles.Button}>НАШИ ПРОЕКТЫ</button>
        </div>
    );
};

export default CognitiveTechnologies;
