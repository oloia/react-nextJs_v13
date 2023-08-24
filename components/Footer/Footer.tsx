import { FooterProps } from '@/components/Footer/Footer.props';
import styles from '@/components/Footer/Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <a href="#" target="_blank">OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</a>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;
