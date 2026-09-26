import { useState } from 'react'
import { profile, about, skills, caseStudies, process, journey, learning } from './content.js'

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">&lt;/&gt;</span> LillyCode
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#how">How I Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Polaroid() {
  const [photoFailed, setPhotoFailed] = useState(false)
  return (
    <figure className="polaroid">
      <span className="tape tape-top" />
      {profile.photo && !photoFailed ? (
        <img src={profile.photo} alt={profile.name} onError={() => setPhotoFailed(true)} />
      ) : (
        <div className="photo-placeholder" aria-label="Photo coming soon">
          <span>LLB</span>
        </div>
      )}
      <figcaption>Dublin, Ireland</figcaption>
      <span className="tape tape-bottom" />
    </figure>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div>
          <h1>
            Hi! I am <span className="accent">{profile.firstName}</span>,
          </h1>
          <p className="hero-sub">
            {profile.tagline}
            <br />
            {profile.location}
          </p>
          <div className="btn-row">
            <a className="btn btn-dark" href={`mailto:${profile.email}`}>✉ Contact me</a>
            {profile.cv ? (
              <a className="btn btn-light" href={profile.cv} download>⤓ Download my CV</a>
            ) : (
              <a className="btn btn-light" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            )}
          </div>
        </div>
        <Polaroid />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div>
          <h2>A Little Bit About Me</h2>
          {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
        </div>
        <div className="skill-cards">
          {skills.map((s) => (
            <div className="card skill-card" key={s.title}>
              <h3 className="eyebrow">{s.title}</h3>
              <p>{s.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section section-tint" id="work">
      <div className="wrap">
        <h2>Selected Work</h2>
        <div className="case-grid">
          {caseStudies.map((c) => (
            <article className="card case-card" key={c.name}>
              <a className="thumb" href={c.link} target="_blank" rel="noreferrer" tabIndex={-1}>
                <img src={c.image} alt={`${c.name} screenshot`} loading="lazy" />
              </a>
              <div className="case-body">
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <ul className="tags">{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <a className="link" href={c.link} target="_blank" rel="noreferrer">{c.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowIWork() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <h2>How I Work</h2>

        <h3 className="sub">How I Build</h3>
        <p className="lead">
          I start by understanding the problem, then build in small pieces that can be tested. Testing isn't an afterthought for me. Years in QA mean I think about edge cases before I've written the code.
        </p>
        <div className="steps">
          {process.map((s) => <div className="step" key={s}>{s}</div>)}
        </div>
        <p className="loop">↺ Repeat with every piece of feedback</p>

        <h3 className="sub">From the Lab to the Web</h3>
        <p className="lead">
          I didn't take the usual route into software, and it shows in how I work. Science taught me to use evidence, QA taught me to be rigorous, and consulting taught me to talk to clients.
        </p>
        <ol className="journey">
          {journey.map((j) => (
            <li key={j.role}>
              <strong>{j.role}</strong>
              <span>{j.note}</span>
            </li>
          ))}
        </ol>

        <h3 className="sub">Always Learning</h3>
        <p className="lead">{learning}</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow eyebrow-pink">Let's talk</p>
        <h2>Thanks for reading.</h2>
        <p>
          I'm open to full-stack and frontend roles, AI projects and collaborations.
          <br />
          Let's build something great together.
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.youtube} target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} · {profile.name} ·{' '}
          <a href="/v1/" target="_blank" rel="noreferrer">See codingiskey v1 (2018)</a>
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <HowIWork />
      </main>
      <Contact />
    </>
  )
}
