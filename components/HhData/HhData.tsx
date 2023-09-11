
import { Card } from '@/components';
import React from 'react';
import { HhDataProps } from '@/components/HhData/HhData.props';
import RateIcon from './rate.svg';
import styles from './HhData.module.css'
import { priceRu } from '@/helpers/helpers';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps) => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <div className={styles.title}>Профи</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
          </div>
        </div>
      </Card>
    </div>
  );

};

export default HhData;
