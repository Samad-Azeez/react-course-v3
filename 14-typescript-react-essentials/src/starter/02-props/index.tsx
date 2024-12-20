import { type PropsWithChildren } from 'react';

// interface ComponentProps {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// }

type ComponentProps = PropsWithChildren<{ name: string; id: number }>;

// or you can also do this using interface
// interface ComponentProps extends PropsWithChildren<{ name: string; id: number }> {}

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>ID: {id}</h1>
      {children}
    </div>
  );
}
export default Component;
