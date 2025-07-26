import React from 'react';

const skills = [
  { name: 'React.js', percent: 75 },
  { name: 'Next.js', percent: 65 },
  { name: 'Tailwind CSS', percent: 80 },
  { name: 'Firebase', percent: 86 },
  { name: 'UI/UX', percent: 50 }
];

const My_Skill = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center"> My Skills</h2>
        <p className="text-xl font-medium text-gray-600 mb-10 text-center">Mobile and Web App Developer</p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-md font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-gray-700 text-lg font-semibold">
          🎓 Student at <span className="text-blue-600">Saylani Mass IT Training (SMIT)</span>
        </div>
      </div>
    </div>
  );
};

export default My_Skill;
