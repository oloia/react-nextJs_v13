import React from 'react';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

const Type = ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  return (
    <div>
      Type: {params.type}
    </div>
  );
};

export default Type;
