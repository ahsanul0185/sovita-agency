export default function Hero_paragraph({ paragraph,classes, ...props }) {
  return (
    <p {...props} className={`text-white font-normal text-sm leading-[170%] z-10 ${classes} fade_in_slide_up`}>
      {paragraph}
    </p>
  );
}
