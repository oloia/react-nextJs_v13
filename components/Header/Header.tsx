import { HeaderProps } from '@/components/Header/Header.props';

const Header = ({ ...props }: HeaderProps) => {
  return (
    <div {...props}>
      Header
    </div>
  );
};

export default Header;
