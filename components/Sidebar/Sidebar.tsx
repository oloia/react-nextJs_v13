import { SidebarProps } from '@/components/Sidebar/Sidebar.props';
import { Menu } from '@/components';
import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.inteface';
import { firstLevelMenu } from '@/helpers/helpers';

const Sidebar = async ({ ...props }: SidebarProps) => {
  // const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
  const menu = await getMenu(TopLevelCategory.Courses);
  return (
    <div {...props}>
      Sidebar
      <Menu menu={menu} />
    </div>
  );
};

export default Sidebar;
