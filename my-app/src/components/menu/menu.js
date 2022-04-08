import Styles from "./menu.module.css";

const Menu = () => {
return (
    <>
      <ul className={Styles.Menu}>
        <li className={Styles.Link}>О нас</li>
        <li className={Styles.Link}>Лаборатория</li>
        <li className={Styles.Link}>Проекты</li>
        <li className={Styles.Link}>Образование</li>
        <li className={Styles.Link}>Публикации</li>
        <li className={Styles.Link}>Команда</li>
        <li className={Styles.Link}>Связаться</li>
      </ul>
    </>
  );
};

export default Menu;
