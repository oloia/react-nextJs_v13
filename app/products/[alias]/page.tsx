import React from 'react';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { getProduct } from '@/api/product';

// export async function generateStaticParams(){
//   const menu = await getMenu(0);
//   return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})))
// }

const PageProduct = async ({params}: {params: {alias: string}}) => {
  const page = await getPage(params.alias)
  const product = await getProduct(page?.category || '')
  if(!page){
    notFound();
  }
  return (
    <div>
      this is alias {page?.category}
      <p></p>
      {product && product.length}
    </div>
  );
};

export default PageProduct;
