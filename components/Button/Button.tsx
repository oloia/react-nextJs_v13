import { ButtonProps } from '@/components/Button/Button.props';
import styles from '@/components/Button/Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({ children, appearance, arrow = 'none', className, ...props }: ButtonProps) => {
  return (
    <button className={cn({
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    }, styles.button, className)} {...props}>
      {children}
      {arrow !== 'none' && <span className={cn({ [styles.down]: arrow === 'down' }, styles.arrow)}>
        <ArrowIcon />
      </span>}
    </button>
  );
};

export default Button;
