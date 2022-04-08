import Menu from "../menu/menu";
import Styles from "./Header.module.css";

const Header = () => {
return (
    <section className={Styles.Header}>
    <div className={Styles.Logo} alt="логотип"></div>
    <Menu />
    </section>
);
};

export default Header;
