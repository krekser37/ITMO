import Styles from "./Cover.module.css";

const Cover = (props) => {
    return (
        <section className={Styles.Cover}>
            <div
                className={Styles.Logo}
                onClick={() => props.setIsCover(false)}
                alt="логотип"
            ></div>
        </section>
    );
};

export default Cover;
