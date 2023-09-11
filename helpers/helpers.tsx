import { FirstLevelMenuItem } from '@/interfaces/menu.inteface';
import CoursesIcon from '@/components/Menu/icons/courses.svg';
import { TopLevelCategory } from '@/interfaces/page.inteface';
import BooksIcon from '@/components/Menu/icons/books.svg';
import ServicesIcon from '@/components/Menu/icons/services.svg';
import ProductsIcon from '@/components/Menu/icons/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
  { route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products },
];

export const priceRu =(price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
