import styles from '@/components/Input/Input.module.css';
import cn from 'classnames';
import { InputProps } from '@/components/Input/Input.props';

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input className={cn(className, styles.input)} {...props}/>
  );

};

export default Input;
