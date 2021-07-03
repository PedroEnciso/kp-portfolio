import styles from "../../styles/componentStyles/homeComponent.module.css";
import { photographyData } from "../../data/photographyData";
import Image from "next/image";

export default function Photography() {
  return (
    <div className={styles.container}>
      <div className={styles.projectGrid}>
        {photographyData.map((project) => (
          <div key={project.name} className={styles.projectContainer}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <div className={styles.imageContainer}>
              <Image
                width={200}
                height={250}
                className={styles.coverImage}
                src={project.coverImage}
                alt="cover image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
