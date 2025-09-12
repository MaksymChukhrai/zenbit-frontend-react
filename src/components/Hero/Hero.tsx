import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The chemical negatively charged
          </h1>
          
          <p className={styles.heroSubtitle}>
            Numerous calculations predict, and experiments confirm, that the force field 
            reflects the beam, while the mass defect is not formed. The chemical compound is 
            negatively charged. While the mass defect is
          </p>
          
          <Link to="#deals" className={`btn btn-primary ${styles.ctaButton}`}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;