import React from "react";
import styles from "./publication-card.module.css";

const PublicationCard = ({ element }) => {
  const [isFooterVisible, setIsFooterVisible] = React.useState(false);
  const [isSocialVisible, setIsSocialVisible] = React.useState(false);

  function showFooter() {
    setIsFooterVisible(true);
  }

  function hideFooter() {
    setIsFooterVisible(false);
  }

  function showSocial() {
    setIsSocialVisible(true);
  }

  function hideSocial() {
    setIsSocialVisible(false);
  }

  return (
    <div
      className={styles.contentWrapper}
      onMouseEnter={showFooter}
      onMouseLeave={() => {
        hideFooter();
        hideSocial();
      }}
    >
      <div
        style={{ backgroundImage: `url("${element.img}")` }}
        className={styles.cardImage}
      />
      <h3 className={styles.cardHeading}>{element.heading}</h3>
      <span className={styles.cardAuthors}>{element.authors}</span>
      <p className={styles.cardParagraph}>{element.text}</p>
      {isFooterVisible ? (
        <div className={styles.cardFooter}>
          <button className={styles.cardFooter_button}>
            <span className={styles.cardFooter_heading}>Читать полностью</span>
            <div className={styles.cardFooter_arrow} />
          </button>
          <button
            onClick={showSocial}
            className={styles.cardFooter_shareButton}
          />
          {isSocialVisible ? (
            <div className={styles.cardFooter_socialListWrapper}>
              <ul className={styles.cardFooter_socialList}>
                <li>
                  <div
                    className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__vk}`}
                  />
                </li>
                <li>
                  <div
                    className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__tg}`}
                  />
                </li>
                <li>
                  <div
                    className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__yt}`}
                  />
                </li>
                <li>
                  <div
                    className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__vk}`}
                  />
                </li>
                <li>
                  <div
                    className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__tg}`}
                  />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default PublicationCard;
