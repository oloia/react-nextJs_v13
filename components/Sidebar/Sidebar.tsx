import { SidebarProps } from '@/components/Sidebar/Sidebar.props';
import { Menu, Search } from '@/components';
import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.inteface';
import Logo from '@/components/Menu/icons/logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css'

const Sidebar = async ({className, ...props }: SidebarProps) => {
  // const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
  const menu = await getMenu(TopLevelCategory.Courses);
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Logo />
      <Search />
      <Menu menu={menu} category={TopLevelCategory.Courses}/>
    </div>
  );
};

export default Sidebar;
