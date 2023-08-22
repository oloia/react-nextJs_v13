import { SidebarProps } from '@/components/Sidebar/Sidebar.props';

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};

export default Sidebar;
