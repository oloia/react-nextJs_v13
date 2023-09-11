import React from 'react';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { getProduct } from '@/api/product';
import TopPageComponent from '@/page-components/TopPageComponent/TopPageComponent';

export async function generateStaticParams(){
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})))
}

const TopPage = async ({params}: {params: {alias: string}}) => {
  const page = await getPage(params.alias)
  const products = await getProduct(page?.category || '')
  if(!page){
    notFound();
  }
  return (
   <TopPageComponent firstCategory={0} page={page} products={products} />
  );
};

export default TopPage;
