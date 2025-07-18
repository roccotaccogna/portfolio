import { Circle } from "./Circle";

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

function Frameworks() {
    const skills = [
        "cplusplus",
        "css3",
        "docker",
        "flutter",
        "html5",
        "javascript",
        "php",
        "react",
        "ts",
        "tailwindcss",
        "vitejs",
        "wordpress",
    ];
  return (
    <div 
        className="relative flex h-[15rem] w-full 
                   flex-col items-center justify-center"
    >
        <Circle iconSize={40}>
            {skills.map((skill, index) => (
                <Icon 
                    key={index}
                    src={`assets/logos/${skill}.svg`}
                />
            ))}
        </Circle>
        <Circle iconSize={25} radius={100} reverse speed={2}>
            {skills.map((skill, index) => (
                <Icon 
                    key={index}
                    src={`assets/logos/${skill}.svg`}
                />
            ))}
        </Circle> 
    </div>
  )
}

export default Frameworks;