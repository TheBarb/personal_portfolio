import React from "react";
import styles from "./threeQuestions.module.scss";
import OneQuestion from "../OneQuestion/OneQuestion";

const ThreeQuestions = ({ projectContent }) => {
  return (
    <>
    <div className={styles.centerAllQuestions}>
      <div className={styles.allQuestionsWrap}>
       <OneQuestion text={projectContent.Briefing} number='1' headline='Ausgangspunkt'/>
       <OneQuestion text={projectContent.Herausforderung} number='2' headline='Herausforderung'/>
       <OneQuestion text={projectContent.WhatsNext} number='3' headline="Ausblick"/>

       {/*  <div className={styles.questionWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.number}>02</h3>
            <h3>Herausforderung</h3>
          </div>
          <div>{projectContent.Herausforderung}</div>
        </div>

        <div className={styles.questionWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.number}>03</h3>
            <h3>What's next?</h3>
          </div>
          <div>{projectContent.WhatsNext}</div>
        </div> */}
      </div>
      </div>
    </>
  );
};

export default ThreeQuestions;
