import styles from '@/components/Textarea/Textarea.module.css';
import cn from 'classnames';
import { TextareaProps } from '@/components/Textarea/Textarea.props';

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea className={cn(className, styles.input)} {...props}/>
  );

};

export default Textarea;
