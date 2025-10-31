'use client'

import CountUp from "react-countup";

export default function Number_box({ count_number, text, color, number_box_id, ...props }) {

  return (
    <div {...props} className={`number-box border-main-${color} border-2 p-6 rounded-2xl flex flex-col gap-3 justify-center items-center z-10 `}>
      <h4 className={`text-medium font-bold text-main-${color}`}>
        <CountUp suffix={props.suffix} prefix={props.prefix} end={count_number} enableScrollSpy delay={2} duration={5}/>
      </h4>
      <p className="text-sm text-center" data-aos="fade-up">{text}</p>
    </div>
  );
}
