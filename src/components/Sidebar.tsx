import { Data } from '../database';
import { toolsType, toolsContent } from '../store';

export const Sidebar = () => {
  return (
    <aside className='flex flex-col px-10 py-8 border-r-[0.2px] border-colorAccent'>
      <button
        className='mb-6 flex gap-2 items-center h-10 rounded-lg px-2'
        onClick={() => {
          toolsType.set('Home');
          toolsContent.set([]);
        }}
      >
        <strong>Home</strong>
      </button>
      <span className='mb-4'>Categories</span>
      <div className='flex flex-col gap-4'>
        {Object.entries(Data.categories).map(([category, tools]) => (
          <button
            key={category}
            className='flex justify-between items-center h-10 cursor-pointer px-2 rounded-lg'
            onClick={() => {
              toolsType.set(category);
              toolsContent.set(tools);
            }}
          >
            <strong>{category}</strong>
            <div className='numberContainer bg-colorTextLight text-colorBackground rounded-lg px-2 items-center'>
              {tools.length}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};
