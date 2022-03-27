import { Button, Card } from "antd";
import React from "react";
import styles from "../styles/projectcard.module.scss";
import { FiArrowRight } from "react-icons/fi";

function ProjectCard({
  colorProps,
  textColorProps,
  title,
  description,
  image,
  link,
}) {
  return (
    <Card className={styles.projectCard} hoverable>
      <div
        className={styles.projectCardImage}
        style={{ backgroundColor: colorProps }}
      ></div>
      <h1 className={styles.cardHeading}>{title}</h1>
      <p className={styles.cardDescription}>{description}</p>
      <Button
        className={styles.exploreBtn}
        style={{ backgroundColor: colorProps, color: textColorProps }}
        href={link}
      >
        Explore it <FiArrowRight style={{margin:"0 0.5rem"}}/>
      </Button>
    </Card>
  );
}

export default ProjectCard;
