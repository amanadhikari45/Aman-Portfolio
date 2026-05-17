// ============================================================
// About — bio, info cards, photo
// ============================================================

import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './About.module.css';

const INFO_ROWS = [
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Dayton, OH (Remote OK)' },
  { icon: 'fa-solid fa-passport', label: 'Visa Status', value: 'CPT Authorized · OPT after graduation' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Degree', value: 'MS Computer Science @ Wright State' },
  { icon: 'fa-solid fa-calendar-check', label: 'Available', value: 'Summer 2026 Internship / Full-Time' },
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'adhikari.80@wright.edu' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader tag="01 — About" heading="Who I" highlight="Am" />

      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.text}>
            <p>
              I'm <strong>Aman Adhikari</strong> — an ML Engineer and Full-Stack Developer currently
              pursuing my <strong>MS in Computer Science at Wright State University</strong>. My work
              sits at the intersection of machine learning research and production engineering: I build
              systems that don't just work in notebooks, but actually ship.
            </p>
            <p>
              Before grad school, I spent <strong>3+ years</strong> as a Senior Developer and
              University Lecturer in Nepal — managing institutional web infrastructure for 3,000+
              users and teaching Advanced Database Systems and AI curriculum to undergraduate
              engineering students.
            </p>
            <p>
              My projects span <strong>medical image AI</strong> (brain MRI segmentation, chest X-ray
              classification, blood cell detection), <strong>government analytics</strong> (GovLens —
              Spring Boot + GPT-4 + React 18), and <strong>mobile AI</strong> (sign language
              recognition with TensorFlow Lite). I care deeply about explainability, performance, and
              building AI that has real-world impact.
            </p>
          </div>

          <div className={styles.infoList}>
            {INFO_ROWS.map((row) => (
              <div key={row.label} className={styles.infoRow}>
                <i className={row.icon} />
                <div>
                  <h5>{row.label}</h5>
                  <p>{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://aman-adhikari.netlify.app/photo.jpg"
            alt="Aman Adhikari"
            className={styles.photo}
            onError={(e) => (e.target.style.display = 'none')}
          />
          <div className={styles.goalCard}>
            <h4>Career Mission</h4>
            <p>
              To become a <strong>world-class Data Scientist & AI/ML Researcher</strong> — pushing
              the boundaries of machine learning in healthcare, social impact, and intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
