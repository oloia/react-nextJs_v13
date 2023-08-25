'use client';

const Error = ({ error }: { error: Error }) => {
  return (
    <>
      <p>Something went wrong</p>
      <div>{JSON.stringify(error)}</div>
    </>
  );
};

export default Error;
