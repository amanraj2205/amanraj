import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, Code } from 'lucide-react';
import './Courses.css';

const courses = [
  {
    title: "Complete web development course",
    platform: "Udemy",
    icon: <MonitorPlay size={24} />,
    skills: ["Node.js", "React","Database","More.."]
  },
  {
    title: "Data Structures & Algorithms in C++",
    platform: "NPTEL",
    icon: <Code size={24} />,
    skills: ["DSA", "Problem Solving","Algorithms"]
  },
  {
    title: "C++ Programming - Self Paced",
    platform: "GeeksforGeeks",
    icon: <BookOpen size={24} />,
    skills: ["C++", "OOPs", "STL Algorithms"]
  },
  {
    title: "Full stack generative and Agentic AI with python",
    platform: "Udemy", 
    icon: <Code size={24} />,
    skills: ["Python", "Agent", "RAG","Vector DBs","Docker"]
  },
  {
    title: "Python Programming",
    platform: "GeeksforGeeks", 
    icon: <Code size={24} />,
    skills: ["Python","OOPs","Machine Learning Basics","Data Science Basics"] 
  }

];

const Courses = () => {
  return (
    <section id="courses" className="courses-section section container">
      <div className="section-header text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Completed <span className="text-gradient">Courses</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-description"
        >
          Continuous learning paths and coursework.
        </motion.p>
      </div>

      <div className="courses-grid grid gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="course-card glass-card"
          >
            <div className="course-icon">
              {course.icon}
            </div>
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-platform">{course.platform}</p>
              <div className="course-skills flex flex-wrap gap-2 mt-4">
                {course.skills.map(skill => (
                  <span key={skill} className="skill-badge text-accent-secondary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
