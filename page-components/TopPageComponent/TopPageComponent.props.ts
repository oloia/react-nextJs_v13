import { TopLevelCategory, TopPageModel } from '@/interfaces/page.inteface';
import { ProductModel } from '@/interfaces/product.interface';


export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page:  TopPageModel | null;
  products: ProductModel[];
}
