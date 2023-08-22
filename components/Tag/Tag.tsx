import { TagProps } from '@/components/Tag/Tag.props';
import styles from '@/components/Tag/Tag.module.css';
import cn from 'classnames';

const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: TagProps) => {
  return (
    <div
      className={cn({
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
      }, styles.tag, className)} {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
