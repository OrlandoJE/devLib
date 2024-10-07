import { toolsType, toolsContent } from '../store';
import { useStore } from '@nanostores/react';
import { ToolCard } from './ToolCard';

export const Content = () => {
  const toolsTypeCont = useStore(toolsType);
  const toolsContentCont = useStore(toolsContent);
  return (
    <main className='flex flex-col justify-center items-center py-32 gap-4'>
      {toolsTypeCont == 'Home' ? (
        <div className='flex flex-col justify-center items-center py-32 gap-4'>
          <h1 className='text-5xl font-bold'>
            Discover the Tools for your Development
          </h1>
          <p className='text-colorTextLight'>
            A project that brings together the best tools for design and web
            development. Choose what you want and be directly taken to the tool
            you need.
          </p>
        </div>
      ) : (
        <>
          <h1 className='text-5xl font-medium mb-8'>{toolsTypeCont}</h1>
          <div className='flex flex-wrap justify-center'>
            {toolsContent &&
              toolsContentCont.map(({ name, url, image, description }) => (
                <ToolCard key={name} name={name} url={url} image={image} description={description} />
              ))}
          </div>
        </>
      )}
    </main>
  );
};
