// ============================================================
// Hero — landing section
// ============================================================

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <span className="dot-pulse" />
          CPT Authorized · No Sponsorship · Available Summer 2026
        </div>

        <h1 className={styles.name}>
          Aman
          <br />
          <span className="grad-text">Adhikari</span>
        </h1>

        <p className={styles.tagline}>
          <span className={styles.hl}>ML Engineer</span> · Data Scientist · Full-Stack Developer
        </p>

        <p className={styles.desc}>
          Building <strong>end-to-end AI/ML systems</strong> — medical image diagnostics,
          government analytics platforms, and intelligent applications.
          MS CS @ Wright State · <strong>3+ years</strong> production engineering ·
          Former University Lecturer at a <strong>top-ranked Engineering Institute in Nepal</strong>.
        </p>

        <div className={styles.goalBox}>
          <p>
            🎯 Mission: To become a <em>world-class Data Scientist & AI/ML Researcher</em> —
            pushing the boundaries of what machine learning can do in healthcare, social impact,
            and intelligent systems.
          </p>
        </div>

        <div className={styles.badges}>
          {[
            { label: 'CPT · Summer 2026', cls: 'green' },
            { label: 'Python · TensorFlow · PyTorch', cls: '' },
            { label: 'Java · Spring Boot', cls: '' },
            { label: 'Medical AI · XAI', cls: 'purple' },
          ].map((b) => (
            <span key={b.label} className={`${styles.badge} ${styles[b.cls]}`}>
              {b.label}
            </span>
          ))}
        </div>

        <div className={styles.btns}>
          <a href="#projects" className="btn btn-primary">
            View My Work ↓
          </a>
          <a
            href="https://github.com/amanadhikari45"
            target="_blank"
            rel="noreferrer"
            className="btn btn-glass"
          >
            <i className="fa-brands fa-github" /> GitHub
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/aman-adhikari-3b295617b"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <i className="fa-brands fa-linkedin" /> LinkedIn
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { num: '35+', label: 'AI/ML Projects' },
            { num: '3+', label: 'Yrs Experience' },
            { num: '100+', label: 'Students Taught' },
            { num: '94%', label: 'Model Accuracy' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={`${styles.statNum} grad-text`}>{s.num}</div>
              <div className={styles.statLbl}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photoWrap}>
          <div className={styles.photoBorder}>
            <div className={styles.photoInner}>
              <img
                src="https://aman-adhikari.netlify.app/photo.jpg"
                alt="Aman Adhikari"
                className={styles.photo}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
          <div className={styles.photoTag}>
            <div className={styles.tagBig}>MS</div>
            <div className={styles.tagSm}>CS @ Wright State</div>
          </div>
        </div>
      </div>
    </section>
  );
}
