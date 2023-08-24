import { useState } from 'react';
import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.inteface';
import CoursesIcon from '@/components/Menu/icons/courses.svg';
import BooksIcon from '@/components/Menu/icons/books.svg';
import ServicesIcon from '@/components/Menu/icons/services.svg';
import ProductsIcon from '@/components/Menu/icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.inteface';
import cn from 'classnames';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
  { route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products },
];

const Menu = async () => {

  const menu = await getMenu(TopLevelCategory.Courses);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.id}>
            <a href={`/${m.route}`}>
              <div className={cn({
                [styles.firstLevelActive]: m.id === TopLevelCategory.Courses,
              }, styles.firstLevel)}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            { m.id === TopLevelCategory.Courses && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn({ [styles.secondBlock]: m.isOpened }, styles.secondLevelBlock)}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a href={`/${route}/${p.alias}`} className={cn({ [styles.thirdLevelActive]: true }, styles.thirdLevel)}>
          {p.category}
        </a>
      ))
    );
  };

  return (
    <div>
      {buildFirstLevel()}
    </div>
  );
};

export default Menu;
