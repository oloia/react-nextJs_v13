import { ProductProps } from '@/components/Product/Product.props';
import styles from '@/components/Product/Product.module.css';
import { Button, Card, Divider, Rating, Tag } from '@/components';
import { declOfNum, priceRu } from '@/helpers/helpers';

const Product = ({ product, className, ...props }: ProductProps) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/>
      </div>
      <div className={styles.title}>
        {product.title}
      </div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice &&
          <Tag className={styles.oldPrice} size={'s'} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating}/>
      </div>
      <div className={styles.tags}>
        {product.categories.map(c => <Tag className={styles.category} key={c} color="ghost" size={'s'}>{c} </Tag>)}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount}
        {declOfNum(product.reviewCount, [' отзыв', ' отзыва', ' отзывов'])}
      </div>
      <Divider className={styles.hr}/>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>{product.characteristics.map(c => (
        <div key={c.name} className={styles.characteristics}>
          <span className={styles.characteristicsName}>{c.name}</span>
          <span className={styles.characteristicsDots}/>
          <span className={styles.characteristicsValue}>{c.value}</span>
        </div>
      ))}</div>
      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <div className={styles.advTitle}>Преимущества</div>
          <div>{product.advantages}</div>
        </div>}
        {product.disadvantages && <div className={styles.disadvantages}>
          <div className={styles.advTitle}>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>}
      </div>
      <Divider className={styles.hr}/>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right" className={styles.reviewButton}>Читать отзывы </Button>
      </div>
    </Card>
  );

};

export default Product;
