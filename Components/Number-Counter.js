import Number_box from "../ui/number-box";
import Small_title from "../ui/small-title";

const Number_Counter = () => {
  return (
    <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15'>
      <Small_title
        title="LES DONNÉES N'ONT JAMAIS ÉTÉ AUSSI CLAIRES."
        classes='text-center mb-10'
      />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Number_box
          count_number={16000}
          text='Nombre de Réalisations'
          color='green'
          number_box_id="home_numb_1"
          data-aos="fade-up" data-aos-duration="1000"
        />
        <Number_box
          count_number={30}
          text='modèles et + personnalisables'
          color='orange'
          number_box_id="home_numb_2"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
        />
        <Number_box
          count_number={423000}
          text='visites / mois'
          color='yellow'
          number_box_id="home_numb_3"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
        />
      </div>
    </div>
  );
};

export default Number_Counter;
