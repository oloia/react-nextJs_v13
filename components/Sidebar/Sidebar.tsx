import { SidebarProps } from '@/components/Sidebar/Sidebar.props';
import { Menu } from '@/components';

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      Sidebar
      <Menu />
    </div>
  );
};

export default Sidebar;
