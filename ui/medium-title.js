export default function Medium_title({ title, title_colored, ...props }) {
  return (
    <h2 {...props} className='text-white text-center font-bold text-small lg:text-medium mb-4 leading-[120%] z-10 uppercase fade_in_slide_up'>
      {title_colored && <span className='colored text-main-blue' data-color={props.color ?? "blue"}>{title_colored}</span>}
      <br />
      {title}
    </h2>
  );
}
