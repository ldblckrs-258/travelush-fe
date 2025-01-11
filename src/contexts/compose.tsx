import { ComponentType, ReactNode } from 'react';

interface ContextComposeProps {
  components: ComponentType<{ children: ReactNode }>[];
  children: ReactNode;
}

export default function ContextCompose(props: ContextComposeProps) {
  const { components = [], children } = props;
  return (
    <>
      {components.reduceRight<ReactNode>(
        (acc: ReactNode, Comp: ComponentType<{ children: ReactNode }>) => (
          <Comp>{acc}</Comp>
        ),
        children,
      )}
    </>
  );
}
