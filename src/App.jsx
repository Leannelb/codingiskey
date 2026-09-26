import { useState } from 'react'
import { profile, about, skills, alsoSkills, caseStudies, talks, process, learning } from './content.js'

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">&lt;/&gt;</span> {profile.name}
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#talks">Talks</a>
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
      <figcaption>{profile.photoCaption}</figcaption>
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
          <p className="hero-sub">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <ul className="creds">{profile.credentials.map((c) => <li key={c}>{c}</li>)}</ul>
          <p className="hero-location">{profile.location}</p>
          <div className="btn-row">
            <a className="btn btn-dark" href="#work">View work</a>
            <a className="btn btn-light" href="#talks">OSMC talks</a>
            <a className="btn btn-light" href={`mailto:${profile.email}`}>✉ Contact me</a>
            {profile.cv && <a className="btn btn-light" href={profile.cv} download>⤓ Download my CV</a>}
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
          <p className="also">{alsoSkills}</p>
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
                <p className="eyebrow">{c.role}</p>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <ul className="tags">{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <a className="link" href={c.link} target="_blank" rel="noreferrer">{c.cta}</a>
              </div>
            </article>
          ))}
        </div>

        <h2 className="talks-title" id="talks">Talks</h2>
        <div className="case-grid">
          {talks.filter((t) => t.link).map((t) => (
            <article className="card case-card" key={t.name}>
              <a className="thumb thumb-video" href={t.link} target="_blank" rel="noreferrer" tabIndex={-1}>
                {t.image && <img src={t.image} alt={`${t.name} video`} loading="lazy" />}
                <span className="play-badge" aria-hidden="true">▶</span>
              </a>
              <div className="case-body">
                <p className="eyebrow">{t.event}</p>
                <h3>{t.name}</h3>
                <p>{t.blurb}</p>
                <div className="talk-links">
                  <a className="link" href={t.link} target="_blank" rel="noreferrer">Watch the talk →</a>
                  {t.slides && <a className="link link-quiet" href={t.slides} target="_blank" rel="noreferrer">Slides</a>}
                </div>
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
        <h2>How I Build Platforms</h2>
        <p className="lead lead-strong">I start with the platform problem, not the ticket.</p>
        <div className="steps">
          {process.map((s) => <div className="step" key={s}>{s}</div>)}
        </div>
        <p className="loop">↺ Repeat with every piece of feedback</p>

        <h3 className="sub">From the Lab to the Web</h3>
        <p className="lead">
          I didn't take the usual route into software, and it shows in how I work. Science taught me to use evidence, QA taught me to be rigorous, and consulting taught me to talk to clients.
        </p>

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
          I'm always happy to talk about AI projects and collaborations.
          <br />
          Let's build something great together.
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://coverly.ie" target="_blank" rel="noreferrer">coverly.ie</a>
        </div>
        <p className="teaching">
          Teaching: <a href={profile.youtube} target="_blank" rel="noreferrer">LillyCode on YouTube</a>
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} · {profile.name} · Senior Software Engineer ·{' '}
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
