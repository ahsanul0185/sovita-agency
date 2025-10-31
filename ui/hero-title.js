export default function Hero_title({ title, title_colored = "", ...props }) {
  return (
    <h1 {...props} className='text-white text-center font-bold text-[40px] text-lg-[56px] mb-4 leading-[120%] z-10 uppercase'>
      {title}
      {title_colored && <span className='colored text-main-blue' dataset-color="blue">{title_colored}</span>}
    </h1>
  );
}
