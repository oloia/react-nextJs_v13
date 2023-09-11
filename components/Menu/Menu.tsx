'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.inteface';
import cn from 'classnames';
import styles from './Menu.module.css';
import Link from 'next/link';
import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import { firstLevelMenu } from '@/helpers/helpers';

interface MenuProps {
  menu: MenuItem[];
  category: number;
}

const Menu: FC<MenuProps> = ({ menu, category }) => {
  const pathname = usePathname();
  const [menuItem, setMenuItem] = useState<MenuItem[]>(menu);

  const openSecondCategory = (secondCategory: string) => {
    setMenuItem(menuItem.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.id}>
            <Link href={`/${m.route}`}>
              <div className={cn({
                [styles.firstLevelActive]: m.id === category,
              }, styles.firstLevel)}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === category && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}
                   onClick={() => openSecondCategory(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <div className={cn({ [styles.secondLevelBlockOpened]: m.isOpened }, styles.secondLevelBlock)}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <Link key={p._id} href={`/${route}/${p.alias}`}
              className={cn({ [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname }, styles.thirdLevel)}>
          {p.category}
        </Link>
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
