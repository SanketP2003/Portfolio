import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SkillBar({ name, level }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-zinc-900">{name}</span>
        <span className="text-yellow-600 font-bold">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

const skills = [
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 78 },
  { name: 'Springboot', level: 85 },
  { name: 'Java', level: 90 },
  { name: 'CSS/Tailwind', level: 70 },
  { name: 'PostgreSql', level: 75 }
];

const experiences = [
  {
    title: 'Infosys Springboard — Software Development Intern\n',
    company: 'Infosys',
    period: '2025 - Present',
    description: 'During my internship at Infosys Springboard, I am working on an Automated Task Reminder & Tracking Application, ' +
        'a productivity-focused web solution designed to simplify task management and enhance team coordination. ' +
        'This project involves developing a robust backend and an intuitive frontend interface to automate task reminders, ' +
        'progress tracking, and deadline notifications.',
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-4 md:mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Me</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              A passionate computer science student who loves building things and solving problems through code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-zinc-900">My Journey</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                I'm a computer science student with a passion for creating digital solutions.
                My journey began with curiosity about how things work, and it has evolved into
                a deep appreciation for clean code, thoughtful design, and user experience.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-colors duration-200"
              >
                Let's Connect
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 md:mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.title} className="border-l-4 border-yellow-400 pl-4 md:pl-6">
                  <h4 className="text-xl font-bold text-zinc-900">{exp.title}</h4>
                  <p className="text-yellow-600 font-semibold">{exp.company} • {exp.period}</p>
                    <p className="text-zinc-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
