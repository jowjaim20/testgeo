import React from 'react';
import styles from '../services.module.scss';

export const SectionDescription = ({ text }) => {
  
  return (
    <p className={`text-xl leading-7 font-normal ${styles.sectionDescriptionText}`}>{text}</p>
  )
}
