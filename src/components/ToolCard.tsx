interface ToolCardProps {
  key: string;
  name: string;
  url: string;
  description: string;
  image: string;
}

export const ToolCard = (props: ToolCardProps) => {
  function imgSource(imagePath: string) {
    return new URL(`../../public/Images/${imagePath}`, import.meta.url).href;
  }
  return (
    <div className='border-[0.2px] border-colorBackgroundLighter shadow-colorTextLight shadow-sm rounded-xl w-96 m-8 flex flex-col flex-wrap overflow-hidden gap-4'>
      <img
        src={imgSource(props.image)}
        className='h-72 shadow-colorBackgroundLighter shadow-md'
      ></img>
      <div className='px-4'>
        <a href={props.url} className='flex text-xl underline'>
          {props.name}
          <svg
            className='Link w-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 19 18'
            fill='none'
          >
            <g
              clip-path='url(#a)'
              stroke=''
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='m13.17 5.25-7.5 7.5M6.42 5.25h6.75V12'></path>
            </g>
            <defs>
              <clipPath id='a'>
                <path
                  fill='#fff'
                  transform='translate(.42)'
                  d='M0 0h18v18H0z'
                ></path>
              </clipPath>
            </defs>
          </svg>
        </a>
        <p className="py-4">
          {props.description}
        </p>
      </div>
    </div>
  );
};
