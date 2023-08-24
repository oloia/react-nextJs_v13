// 'use client';
import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import { Metadata } from 'next';
import { getMenu } from '@/api/menu';
import { getProduct } from '@/api/product';
import { getPage } from '@/api/page';

export async function generateMetadata(): Promise<Metadata>{
  return {
    title: 'ComputedMeta'
  }
}

const Home = async () =>  {
  const menu = await getMenu(0);
  const page = await getPage('typescript');

  return (
    <>
      <Htag tag={'h3'}>title</Htag>
      <Button appearance="primary" arrow="right" >button 1</Button>
      <Button appearance="ghost" arrow="right">button 2</Button>
      <Paragraph size="l">Large</Paragraph>
      <Paragraph>medium</Paragraph>
      <Paragraph size="s">small</Paragraph>
      <Tag size="m" color="ghost" href={'jgj'}>text</Tag>
      <Tag size="s" color="red">text</Tag>
      <Tag size="m" color="primary">text</Tag>
      <Tag size="s" color="grey">text</Tag>
      <Tag size="m" color="green">text</Tag>
      {/*<Rating rating={4} isEditable />*/}
    </>
  );
};

export default Home;
