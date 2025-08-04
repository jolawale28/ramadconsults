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
      title: 'Integrated Structural & MEP Design',
      desc: 'We combine structural engineering with mechanical, electrical, and plumbing systems for seamless coordination and efficient execution across all stages.',
      image: '/images/project_grid_card.jpg',
      dest: '/more'
    },
    {
      title: 'Infrastructure Planning & Supervision',
      desc: 'From roads to utilities, we handle the design and oversight of critical infrastructure ensuring safety, compliance, and long-term durability.',
      image: '/images/project_grid_card2.jpg',
      dest: '/more'
    },
    {
      title: 'Efficient Project Management with BIM precision',
      desc: 'We manage timelines, teams, and resources using advanced tools like Building Information Modelling (BIM) to reduce errors, save costs, and keep your project on track.',
      image: '/images/project_grid_card3.jpg',
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
