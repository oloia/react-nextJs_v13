'use client';
import { TopPageComponentProps } from '@/page-components/TopPageComponent/TopPageComponent.props';
import { Advantages, HhData, Htag, Sort, Tag } from '@/components';
import styles from '@/page-components/TopPageComponent/TopPageComponent.module.css';
import { TopLevelCategory } from '@/interfaces/page.inteface';
import { SortEnum } from '@/components/Sort/Sort.props';
import { sortReducer } from '@/page-components/TopPageComponent/sort.reducer';
import { useReducer } from 'react';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { sort: SortEnum.Rating, products });
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div>
      <div className={styles.title}>
        <Htag tag={'h1'}>{page?.title}</Htag>
        {products && <Tag color="grey" size="m">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => (
          <div key={p._id}>{p.title}</div>
        ))}
        <div className={styles.hhTitle}>
          <Htag tag={'h2'}>Вакансии - {page?.category}</Htag>
          <Tag color="red" size="m">hh.ru</Tag>
        </div>
        {firstCategory === TopLevelCategory.Courses && page?.hh && <HhData {...page?.hh} />}
        {page?.advantages && page.advantages.length > 0 &&
          <>
            <Htag tag={'h2'}>Преимущества</Htag>
            <Advantages advantages={page.advantages}/>
          </>
        }
        {page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }}/>}
        <Htag tag={'h2'}>Получаемые навыки</Htag>
        {page?.tags.map(t => <Tag key={t} size="m" color="primary">{t}</Tag>)}
      </div>

    </div>
  );
};

export default TopPageComponent;
