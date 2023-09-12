import { DividerProps } from '@/components/Divider/Divider.props';
import styles from '@/components/Divider/Divider.module.css';
import cn from 'classnames';

const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <hr className={cn(className, styles.hr)} {...props} />
  );

};

export default Divider;
