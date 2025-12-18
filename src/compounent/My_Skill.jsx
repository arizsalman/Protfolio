// import React from 'react';

// const skills = [
//   { name: 'React.js', percent: 75 },
//   { name: 'Next.js', percent: 65 },
//   { name: 'Tailwind CSS', percent: 80 },
//   { name: 'Firebase', percent: 86 },
//   { name: 'UI/UX', percent: 50 }
// ];

// const My_Skill = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20 font-sans">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center"> My Skills</h2>
//         <p className="text-xl font-medium text-gray-600 mb-10 text-center">Mobile and Web App Developer</p>

//         <div className="space-y-6">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between mb-1">
//                 <span className="text-md font-medium text-gray-700">{skill.name}</span>
//                 <span className="text-sm text-gray-500">{skill.percent}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div
//                   className="bg-blue-600 h-3 rounded-full transition-all duration-500"
//                   style={{ width: `${skill.percent}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div className="mt-10 text-center text-gray-700 text-lg font-semibold">
//           🎓 Student at <span className="text-blue-600">Saylani Mass IT Training (SMIT)</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default My_Skill;




// 
import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const skills = [
  { name: 'React.js', percent: 75 },
  { name: 'Next.js', percent: 65 },
  { name: 'Tailwind CSS', percent: 80 },
  { name: 'Firebase', percent: 86 },
  { name: 'UI/UX', percent: 50 },
  { name: 'Python', percent: 70 },
];

// CountUp component animates number from 0 to target
const CountUp = ({ target, delay }) => {
  const [number, setNumber] = useState(0);

  const { numberValue } = useSpring({
    from: { numberValue: 0 },
    to: { numberValue: target },
    delay,
    config: config.molasses,
    onChange: (result) => {
      setNumber(Math.floor(result.value.numberValue));
    },
  });

  return <span>{number}%</span>;
};

const SkillBar = ({ skill, delay }) => {
  const barSpring = useSpring({
    from: { width: '0%' },
    to: { width: `${skill.percent}%` },
    config: { tension: 180, friction: 20 },
    delay,
  });

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-md font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">
          <CountUp target={skill.percent} delay={delay} />
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <animated.div
          className="bg-blue-600 h-3 rounded-full"
          style={barSpring}
        />
      </div>
    </div>
  );
};

const My_Skill = () => {
  const sectionSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.smooth,
    delay: 150,
  });

  return (
    <animated.div
      style={sectionSpring}
      className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20 font-sans"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          My Skills
        </h2>
        <p className="text-xl font-medium text-gray-600 mb-10 text-center">
          Mobile and Web App Developer
        </p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              delay={300 + index * 250}
            />
          ))}
        </div>

        <div className="mt-10 text-center text-gray-700 text-lg font-semibold">
          🎓 Student at{' '}
          <span className="text-blue-600">Saylani Mass IT Training (SMIT)</span>
        </div>
      </div>
    </animated.div>
  );
};

export default My_Skill;
