import CardsProjectsDelivered from './CardProjectsDelivered'

export default function SectionProjectsDelivered() {

  type PropsType = {
    title: string;
    desc: string;
    image: string;
    dest: string;
  }

  const projectCards: PropsType[] = [
    {
      title: 'Structural Steel Design',
      desc: 'We deliver well-engineered and precisely detailed steel structures, ensuring strength, stability, and seamless coordination with other building systems for efficient and safe execution on site.',
      image: '/images/personnel/engr_ramad.jpg',
      dest: '/more'
    },
    {
      title: 'Advanced Flat & PT Slab Engineering',
      desc: 'Optimized flat slab systems that enhance structural efficiency, reduce material use, and support spacious, modern building designs.',
      image: '/images/pt_slab.png',
      dest: '/more'
    },
    {
      title: 'Infrastructure Planning & Supervision',
      desc: 'From roads to utilities, we handle the design and oversight of critical infrastructure ensuring safety, compliance, and long-term durability.',
      image: '/images/project_grid_card2.jpg',
      dest: '/more'
    }
  ]
  return (
    <section className='screenFrame lg:px-[50px] px-[12px] bg-gray-50 lg:py-28 py-8'>
      <h2 className='md:text-[40px] text-[32px] leading-[2.5rem] tracking-[-3%] m-0 mb-10'>
        <span className='font-semibold'>
          From Concept to Completion,
          <br />
        </span>{' '}
        <span className='text-[#A93E41] italic'>We Deliver.</span>
      </h2>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
        {
          projectCards.map((ele, idx) => (
            <div key={`project_grid_card_${idx}`}><CardsProjectsDelivered {...ele} /></div>
          ))
        }

      </div>
    </section>
  )
}
