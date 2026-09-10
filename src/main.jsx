import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import profilePhoto from "./assets/profile.png";
import "./styles.css";


const profile = {
  name: "Anvesha Singh",
  initials: "AS",
  roles: ["Frontend Developer", "Full-Stack Engineer", "Problem Solver", "CS Graduate '26"],
  email: "anveshasingh945@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/anvesha-singh09/",
    github: "https://github.com/Anvesha308",
    leetcode: "https://leetcode.com/u/anvesha_singh/",
    gfg: "https://www.geeksforgeeks.org/profile/anveshasingh?tab=activity",
  },
  summary:
    "Computer Science Engineering graduate (2026) with hands-on experience in HTML, CSS, JavaScript, and React.js, backed by a strong foundation in Java, Data Structures & Algorithms, Object-Oriented Programming, and software design principles. Comfortable learning and applying new programming languages, coding practices, and software development methodologies, with experience in testing, debugging, and bug fixing across independent full-stack projects.",
};

const stats = [
  { num: "3+", label: "Full-Stack Projects" },
  { num: "100+", label: "LeetCode Problems" },
  { num: "Top 54", label: "Smart India Hackathon '24" },
];

const skillGroups = [
  { title: "Programming Languages", skills: ["Java", "JavaScript", "TypeScript", "SQL"] },
  { title: "Web Development", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend Frameworks", skills: ["Spring Boot", "Spring MVC", "Flask", "REST APIs", "Microservices Architecture", "JDBC"] },
  { title: "Databases", skills: ["SQL", "MongoDB", "MongoDB Atlas"] },
  { title: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Cursor", "Docker", "Maven", "JUnit", "Render", "Vercel"] },
  { title: "Core Concepts", skills: ["Data Structures & Algorithms", "OOP", "Software Design Principles", "DBMS", "Web App Development", "Testing & Debugging", "SDLC"] },
];

const projects = [
  {
    title: "Shopverse — Full-Stack E-Commerce Platform",
    stack: ["Spring Boot", "React", "Tailwind CSS", "MongoDB Atlas"],
    bullets: [
      "Built a full-stack e-commerce platform modeled on Amazon/Flipkart, with a Spring Boot REST API backend and a React + Tailwind CSS frontend.",
      "Implemented secure user registration, login, and protected routes to support cart and order management.",
      "Designed and integrated a MongoDB Atlas data layer for products, users, carts, and orders, supporting core shopping-cart and checkout workflows.",
      "Deployed the backend on Render and the frontend on Vercel, configuring environment variables and CI-driven redeploys for a production-ready live application.",
    ],
    link: "https://github.com/Anvesha308",
  },
  {
    title: "Health Data Information and Management System",
    stack: ["HTML", "CSS", "JavaScript", "MongoDB", "Ethereum"],
    bullets: [
      "Engineered a web application for managing patient health data and streamlining access to government health-insurance and welfare schemes.",
      "Integrated Ethereum-based blockchain storage for secure, tamper-evident health records and improved coordination between hospitals and health programs.",
      "Focused the design on preventive care, reducing treatment delays through faster, more transparent service delivery.",
    ],
    link: "https://github.com/Anvesha308",
  },
  {
    title: "AI Produce Quality Analyzer",
    stack: ["React", "TypeScript", "Gemini API"],
    bullets: [
      "Developed a responsive web application that analyzes produce quality from uploaded images.",
      "Integrated the Gemini API to identify quality and freshness and provide detailed produce analysis.",
      "Designed an intuitive frontend with real-time image preview and AI-generated results.",
    ],
    link: "https://github.com/Anvesha308",
  },
];

const experience = [
  {
    role: "Frontend Development Intern",
    org: "Sandesh Tech Soft (P) Ltd. — On-site",
    period: "Internship",
    desc: "Completed an on-site frontend development training program, building responsive web pages with HTML, CSS, and JavaScript and applying them to hands-on assignments.",
  },
  {
    role: "B.Tech, Computer Science and Engineering",
    org: "Galgotias University, Greater Noida",
    period: "2022 – 2026 · CGPA 7.8/10",
    desc: "Coursework and independent projects spanning data structures & algorithms, object-oriented programming, DBMS, and full-stack web development.",
  },
];

const achievements = [
  { title: "Smart India Hackathon 2024", sub: "Ranked in the Top 54 teams nationally" },
  { title: "Dextrix '24, Galgotias University", sub: "Ranked in the Top 60 teams" },
  { title: "Competitive Programming", sub: "100+ Data Structures & Algorithms problems on LeetCode" },
  { title: "Certification", sub: "Frontend Development — YHills" },
];

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

//icons  

const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" strokeLinecap="round" />
  </svg>
);
const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 14c-2 1-3 5-3 5s4-1 5-3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 14.5L12 21l2-2-1-3M9.5 14.5L14 9M9.5 14.5L5 12l5-4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 9c1-4 4-6 8-6-1 4-2 7-6 8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="15.5" cy="7.5" r="1" />
  </svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" />
  </svg>
);
const IconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 5h3a4 4 0 01-4 5M7 5H4a4 4 0 004 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 5 3.24 9.24 7.74 10.74.57.1.78-.25.78-.55v-2.15c-3.15.68-3.81-1.35-3.81-1.35-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.74.11 3.03.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.1 11.1 0 0023.1 11.6C23.1 5.33 18.27.5 12 .5z" />
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);
const IconLeetcode = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 2.3a1.4 1.4 0 00-1.98 0L5.4 8.42a3.7 3.7 0 000 5.23l5.3 5.3a1.4 1.4 0 102-2l-4.3-4.3a1.4 1.4 0 010-1.98l6.12-6.12a1.4 1.4 0 000-1.98l-1.02-1.27zM9.9 14.9a1.4 1.4 0 011.98 0l2.6 2.6a2.9 2.9 0 004.1 0 1.4 1.4 0 111.98 1.98 5.7 5.7 0 01-8.06 0l-2.6-2.6a1.4 1.4 0 010-1.98zM19 10.3h-6.4a1.4 1.4 0 000 2.8H19a1.4 1.4 0 000-2.8z" />
  </svg>
);
const IconGfg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.1 2 11.2c0 3 1.6 5.6 4.1 7.2-.1-.6-.2-1.5 0-2.1.2-.7 1.4-5.8 1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.3 0-5.3 2.5-5.3 5.1 0 1 .4 2 .9 2.6.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.6-.7-2.6-3-2.6-4.8 0-3.9 2.8-7.5 8.2-7.5 4.3 0 7.6 3.1 7.6 7.2 0 4.3-2.7 7.7-6.5 7.7-1.3 0-2.5-.7-2.9-1.4l-.8 3c-.3 1.1-1.1 2.4-1.6 3.3 1.2.4 2.6.6 3.9.6 5.5 0 10-4.1 10-9.2C22 6.1 17.5 2 12 2z" />
  </svg>
);
const iconMap = {
  home: IconHome, about: IconUser, skills: IconCode, projects: IconRocket,
  experience: IconBriefcase, achievements: IconTrophy, contact: IconMail,
};

//helpers 
function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`fade-section ${visible ? "visible" : ""}`}>{children}</div>;
}

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);
  return text;
}

function Starfield() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, stars, nebulae, mouseX = 0, mouseY = 0, animId;
    const rand = (min, max) => Math.random() * (max - min) + min;

    function setup() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const starCount = Math.floor((width * height) / 9000);
      stars = Array.from({ length: starCount }, () => ({
        x: rand(0, width), y: rand(0, height), r: rand(0.4, 1.6),
        baseAlpha: rand(0.25, 1), twinkleSpeed: rand(0.005, 0.02),
        phase: rand(0, Math.PI * 2), depth: rand(0.2, 1),
      }));
      nebulae = [
        { x: width * 0.15, y: height * 0.2, r: 320, color: "77, 130, 255" },
        { x: width * 0.85, y: height * 0.75, r: 380, color: "150, 90, 255" },
        { x: width * 0.6, y: height * 0.1, r: 260, color: "255, 90, 200" },
      ];
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      nebulae.forEach((n) => {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, `rgba(${n.color}, 0.06)`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });
      stars.forEach((s) => {
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.phase);
        const alpha = s.baseAlpha * (0.4 + 0.6 * twinkle);
        const px = s.x + (mouseX - width / 2) * 0.008 * s.depth;
        const py = s.y + (mouseY - height / 2) * 0.008 * s.depth;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 240, 255, ${alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) { mouseX = e.clientX; mouseY = e.clientY; }
    function onResize() { setup(); }

    setup();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return <canvas ref={canvasRef} className="starfield-canvas" />;
}

//sections 

function Sidebar({ activeSection, onNavigate, open, onClose }) {
  return (
    <>
      <div className={`sidebar-overlay ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <div className="orbit-dot" />
          <div className="avatar-circle">
            <img src={profilePhoto} alt={profile.name} />
          </div>
        </div>
        <div className="sidebar-name">{profile.name}</div>
        <div className="sidebar-role">Computer Science Engineer<br />Frontend &amp; Full-Stack Development</div>
        <nav className="nav-list">
          {navItems.map((item) => {
            const Icon = iconMap[item.id];
            return (
              <a key={item.id} className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); onNavigate(item.id); }} href={`#${item.id}`}>
                <Icon />{item.label}
              </a>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <div className="social-row">
            <a className="social-icon" href={profile.links.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><IconLinkedin /></a>
            <a className="social-icon" href={profile.links.github} target="_blank" rel="noreferrer" title="GitHub"><IconGithub /></a>
            <a className="social-icon" href={profile.links.leetcode} target="_blank" rel="noreferrer" title="LeetCode"><IconLeetcode /></a>
            <a className="social-icon" href={profile.links.gfg} target="_blank" rel="noreferrer" title="GeeksforGeeks"><IconGfg /></a>
            <a className="social-icon" href={`mailto:${profile.email}`} title="Email"><IconMail /></a>
          </div>
          <div className="status-pill"><span className="status-dot" />Open to opportunities</div>
        </div>
      </aside>
    </>
  );
}

function Hero({ onNavigate }) {
  const typed = useTypewriter(profile.roles);
  return (
    <section id="home" className="section hero">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">// Hello, world — welcome to my portfolio</span>
          <h1 className="hero-title">I'm <span className="grad">{profile.name}</span></h1>
          <div className="hero-role">{typed}<span className="cursor" /></div>
          <p className="hero-desc">
            I build clean, responsive, full-stack web applications — from React
            interfaces to Spring Boot APIs — and I like exploring how far a good
            interface and a well-designed backend can take a product.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#projects"
              onClick={(e) => { e.preventDefault(); onNavigate("projects"); }}>View Projects</a>
            <a className="btn btn-ghost" href="#contact"
              onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}>Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="planet-frame">
            <div className="planet-ring-outer" />
            <div className="planet-photo"><img src={profilePhoto} alt={profile.name} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <span className="section-label">01 · About</span>
        <h2 className="section-title">A bit about me</h2>
        <p className="about-text">{profile.summary}</p>
        <div className="about-grid">
          {stats.map((s) => (
            <div className="stat-card glass" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <span className="section-label">02 · Skills</span>
        <h2 className="section-title">Tools of the trade</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card glass" key={group.title}>
              <h4>{group.title}</h4>
              <div className="chip-row">
                {group.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <span className="section-label">03 · Projects</span>
        <h2 className="section-title">Things I've built</h2>
        {projects.map((p) => (
          <div className="project-card glass" key={p.title}>
            <div className="project-head">
              <div className="project-title">{p.title}</div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View Code ↗</a>
            </div>
            <div className="project-stack">{p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <ul className="project-bullets">{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <span className="section-label">04 · Experience</span>
        <h2 className="section-title">Where I've been</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div className="timeline-item" key={e.role}>
              <div className="timeline-dot" />
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-meta">{e.org} · {e.period}</div>
              <div className="timeline-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section">
      <Reveal>
        <span className="section-label">05 · Achievements</span>
        <h2 className="section-title">Milestones</h2>
        <div className="achv-grid">
          {achievements.map((a) => (
            <div className="achv-card glass" key={a.title}>
              <div className="achv-icon"><IconTrophy /></div>
              <div>
                <div className="achv-title">{a.title}</div>
                <div className="achv-sub">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <span className="section-label">06 · Contact</span>
        <h2 className="section-title">Let's build something</h2>
        <div className="contact-card glass">
          <p>I'm open to internship and software developer opportunities. Feel free to reach out — I usually reply within a day or two.</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email Me</a>
            <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-note">Designed &amp; built by {profile.name} · React ⚛ + Vite</div>
      </Reveal>
    </section>
  );
}

//app 

function App() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleNavigate(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileOpen(false);
  }

  return (
    <div className="app-shell">
      <Starfield />
      <div className="mobile-topbar">
        <span className="brand">{profile.initials} · Portfolio</span>
        <button className="hamburger" aria-label="Toggle navigation" onClick={() => setMobileOpen((o) => !o)}>
          <span />
        </button>
      </div>
      <Sidebar activeSection={active} onNavigate={handleNavigate} open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="main-content">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
