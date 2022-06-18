import React from 'react'
import Link from "next/link";
import styles from './projectOverview.module.scss'
import Button from '../../Components/Button/Button'

const ProjectOverview = ({projectContent, techStack}) => {
  return (
    <div className={styles.wrapper}>
        <Link href='/landingpage'> 
        <p className={styles.back}><span className={styles.arrow}>ᐸ</span>ZURÜCK</p>
        </Link>
        <h3 className={styles.client}>{projectContent.client}</h3>
        <h2>{projectContent.shortDescription}</h2>
        <p>{projectContent.longDescription}</p>
        <div className={styles.techStack}>
            {techStack.map((tech, index) => {
                return(
                <div key= {index} className={styles.arrangeButton}>
                <Button buttonContent={tech.attributes.skill}/>
                </div> 
    )})}
        </div>

    </div>
  )
}

export default ProjectOverview
