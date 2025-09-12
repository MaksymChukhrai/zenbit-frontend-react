import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProperties } from '../../store/propertiesSlice';
import Hero from '../../components/Hero/Hero';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { properties, isLoading, error } = useAppSelector((state) => state.properties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <Hero />
      
<section className={styles.openDeals}>
  <div className={`container ${styles.dealsContainer}`}> {/* Добавляем второй класс */}
    <h2 className={styles.sectionTitle}>Open Deals</h2>
    
    {isLoading && (
      <div className={styles.loading}>Loading properties...</div>
    )}
    
    {error && (
      <div className={styles.error}>Error: {error}</div>
    )}
    
    <div className={styles.propertiesGrid}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;