export default function Hero_subtitle({ subtitle, subtitle_colored = "", ...props }) {
    return (
      <h5 {...props} className='text-white text-bold text-xl text-center pb-6 leading-[140%] z-10 fade_in_slide_up'>
        {subtitle}
        {subtitle_colored && (
          <span className='colored text-main-blue' data-color="blue">{subtitle_colored}</span>
        )}
      </h5>
    );
}
