import { experiences } from "../constants";
import { Timeline }  from "../components/Timeline";

function Experience() {
  return (
    <div className="w-full">
      <Timeline data={experiences}/>
    </div>
  )
}

export default Experience;