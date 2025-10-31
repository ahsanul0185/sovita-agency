export default function Small_title({ title, classes, ...props }) {
  return (
    <h2
      {...props}
      className={`text-white font-bold text-small leading-[120%] uppercase z-10 ${classes} fade_in_slide_up`}>
      {title}
    </h2>
  );
}
