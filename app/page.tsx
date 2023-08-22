'use client';
import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import { useState } from 'react';


const Home = () => {
  const [count, setCount] = useState(3);
  return (
    <>
      {count}
      <Htag tag={'h3'}>title</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCount(item => item + 1)}>button 1</Button>
      <Button appearance="ghost" arrow="right">button 2</Button>
      <Paragraph size="l">Large</Paragraph>
      <Paragraph>medium</Paragraph>
      <Paragraph size="s">small</Paragraph>
      <Tag size="m" color="ghost" href={'jgj'}>text</Tag>
      <Tag size="s" color="red">text</Tag>
      <Tag size="m" color="primary">text</Tag>
      <Tag size="s" color="grey">text</Tag>
      <Tag size="m" color="green">text</Tag>
      <Rating rating={count} isEditable setRating={setCount}/>
    </>
  );
};
export default Home;
