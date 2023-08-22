import { ParagraphProps } from '@/components/Paragraph/Paragraph.props';
import styles from '@/components/Paragraph/Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({ size = 'm', children, className, ...props }: ParagraphProps) => {
  return (
    <p
      className={cn({
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      }, styles.p, className)} {...props}
    >
      {children}
    </p>
  );

};

export default Paragraph;
