import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useEffect, useState } from "react";

const PORTFOLIO_ITEMS = [
  {
    label: "[ BRAND IDENTITY ]",
    bg: "#1a1a1a",
    accent: "#3a3a3a",
    tag: "Branding",
  },
  {
    label: "[ CRM & ADS ]",
    bg: "#2c2c2c",
    accent: "#4a4a4a",
    tag: "Campaign",
  },
  {
    label: "[ SOCIAL MEDIA ]",
    bg: "#0f0f0f",
    accent: "#2a2a2a",
    tag: "Content",
  },
];

const SPECIALIZATIONS = [
  {
    num: "01",
    title: "Branding Design",
    desc: "Creating cohesive brand identities — from logo systems to complete visual language.",
  },
  {
    num: "02",
    title: "CRM & Ads Branding",
    desc: "Designing persuasive campaigns for customer retention, acquisition, and growth.",
  },
  {
    num: "03",
    title: "Social Media Content",
    desc: "Crafting scroll-stopping visuals optimized for each digital platform.",
  },
  {
    num: "04",
    title: "AI Enthusiast",
    desc: "Exploring generative AI to push the creative frontier and accelerate design output.",
  },
];

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        })
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const year = new Date().getFullYear().toString().slice(2);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rulita Sani — Senior Graphic Designer</title>
        <meta
          name="description"
          content="Rulita Sani. Senior Graphic Designer with 8+ years specializing in Branding, CRM & Ads, Social Media Content, and AI-driven Design."
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      {/* ── Navigation ── */}
      <nav className={styles.nav}>
        <span className={styles.navName}>Rulita Sani</span>
        <div className={styles.navCenter}>
          <span>Reach Out</span>
          <span>hitmeup.rulita@gmail.com</span>
        </div>
        <span className={styles.navRight}>JKT | {time} |</span>
      </nav>

      <main className={styles.main}>
        {/* ── Hero ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroLeft}>
            <div className={styles.heroMeta}>
              <span className={styles.heroMetaItem}>Senior Graphic Designer</span>
              <span className={styles.heroMetaItem}>8 Years Experience</span>
              <span className={styles.heroMetaItem}>Jakarta, Indonesia</span>
            </div>
          </div>
          <div className={styles.heroRight}>
            <h1 className={styles.heroTitle}>
              Rulita
              <br />
              Sani
              <br />
              Senior
              <br />
              Graphic
              <br />
              Designer
            </h1>
          </div>
        </section>

        {/* ── About ── */}
        <section className={styles.aboutSection}>
          <span className={styles.sectionLabel}>[ About ]</span>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Rulita crafts brand identities and visual experiences that
              resonate with audiences. With 8 years in fast-paced companies, she
              transforms creative ideas into compelling designs across branding,
              CRM, ads, and social media — now exploring the frontier of
              AI&#8209;driven design.
            </p>
            <span className={styles.yearsTag}>
              8 Years · Branding · CRM · Social · AI
            </span>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <section className={styles.portfolioSection}>
          <div className={styles.portfolioGrid}>
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.label} className={styles.portfolioItem}>
                <div className={styles.portfolioImage}>
                  <div
                    className={styles.portfolioImagePlaceholder}
                    style={{ background: item.bg }}
                  >
                    <span className={styles.portfolioPlaceholderText}>
                      {item.tag}
                    </span>
                  </div>
                </div>
                <span className={styles.portfolioLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Specializations ── */}
        <section className={styles.specialSection}>
          <div className={styles.specialHeader}>
            <h2 className={styles.specialTitle}>Specializations</h2>
            <span className={styles.sectionLabel}>[ What I Do ]</span>
          </div>
          <div className={styles.specialGrid}>
            {SPECIALIZATIONS.map((s) => (
              <div key={s.num} className={styles.specialItem}>
                <span className={styles.specialNum}>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Contact ── */}
      <section className={styles.contactSection} ref={contactRef}>
        <span className={styles.sectionLabel}>[ Reach Out ]</span>
        <div className={styles.contactLinks}>
          <a
            href="mailto:hitmeup.rulita@gmail.com"
            className={styles.contactLink}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/rulitash"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/rulitasani"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <a
            href="https://dribbble.com/rulitash"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <span>Rulita Sani &lsquo;{year}</span>
        <span>All Rights Reserved</span>
      </footer>
    </div>
  );
}
