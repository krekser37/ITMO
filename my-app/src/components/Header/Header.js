import Styles from "./Header.module.css";

const Header = () => {
    return (

        <section className={Styles.Header}>
            <div className={Styles.Logo} alt="логотип"></div>
            <ul className={Styles.Menu}>
                <li className={Styles.Link}>О нас</li>
                <li className={Styles.Link}>Лаборатория</li>
                <li className={Styles.Link}>Проекты</li>
                <li className={Styles.Link}>Образование</li>
                <li className={Styles.Link}>Публикации</li>
                <li className={Styles.Link}>Команда</li>
                <li className={Styles.Link}>Связаться</li>
            </ul>

        </section>
    )
}

export default Header;