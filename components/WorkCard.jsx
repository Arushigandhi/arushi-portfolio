import React from "react";
import styles from "../styles/workcard.module.scss";
import Link from "next/link";

function WorkCard({
  colorProps,
  textColorProps,
  title,
  description,
  date,
  link,
}) {
  return (
    <Link href={link}>
    <div className={styles.workCard}>
      <div
        className={styles.workCardImage}
        style={{ backgroundColor: colorProps }}
        ></div>
      <div className={styles.workCardController}>
        <h1 className={styles.cardHeading}>{title}</h1>
        <h2 className={styles.cardDate} style={{ color: textColorProps }}>
          {date}
        </h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
        </Link>
  );
}

export default WorkCard;
