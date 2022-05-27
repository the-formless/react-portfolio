import Skill from './Components/skillComponent'
import { skillsData } from './skillsData'
import './index.scss'

function Skills() {
  return (
    <div className='skills-page'>
      {skillsData.map((v,i) => <Skill img={v.image} title={v.title} key={i}/>)}
    </div>
  )
}

export default Skills