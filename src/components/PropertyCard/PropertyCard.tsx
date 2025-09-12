import React from 'react';
import { Property } from '../../types';
import styles from './PropertyCard.module.scss';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={property.imageUrl} 
          alt={property.name}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <h5 className={styles.heading}>{property.name}</h5>
              <ul className={styles.features}>
                <li className={styles.price}>{property.priceLabel}</li>
                <li className={styles.ticket}>Tiket - {property.ticketSize}</li>
              </ul>
            </div>

            <ul className={styles.statBlock}>
              <li className={styles.title}>Yield {property.yieldPercentage}%</li>
              <li className={styles.left}>Days left {property.daysLeft}</li>
            </ul>

            <ul className={styles.statItem}>
              <li>Sold {property.soldPercentage}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;