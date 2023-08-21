import { Button, Htag } from '@/components';
import Logo from '../public/vercel.svg'


const Home = () => {
  return (
    <>
      <Htag tag={'h3'}>title</Htag>
      <Button appearance="primary" arrow="right">button 1</Button>
      <Button appearance="ghost" arrow="right">button 2</Button>
    </>
  );
};
export default Home;
