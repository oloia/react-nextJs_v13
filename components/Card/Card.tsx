import { CardProps } from '@/components/Card/Card.props';
import styles from '@/components/Card/Card.module.css';
import cn from 'classnames';

const Card = ({ color = 'white', children, className, ...props }: CardProps) => {
  return (
    <div className={cn({
      [styles.blue]: color === 'blue',
    }, styles.card, className)} {...props}>
      {children}
    </div>
  );

};

export default Card;
