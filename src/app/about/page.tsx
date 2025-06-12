import { aboutMetadata } from '../metadata'

export const metadata = aboutMetadata

export default function About() {
  return (
    <>
      <section className="h-[40vh] flex items-center justify-center text-center">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="hero-intro text-xl text-[#ccd6f6]">Full Stack Engineer with a passion for both technology and agriculture.</p>
        </div>
      </section>

      <section className="about-content py-12">
        <div className="section-content max-w-6xl mx-auto px-4">
          <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="about-card transition-transform hover:-translate-y-1">
              <h3 className="text-[#018c6d] text-xl font-semibold mb-4">
                <i className="fas fa-code mr-2"></i>
                What I Do
              </h3>
              <p className="text-[#ccd6f6] leading-relaxed">
                Passionate about creating seamless web experiences from front-end to back-end.
                With expertise in modern dev technologies, I bring ideas to life through clean,
                efficient, and scalable code.
              </p>
            </div>

            <div className="about-card transition-transform hover:-translate-y-1">
              <h3 className="text-[#018c6d] text-xl font-semibold mb-4">
                <i className="fas fa-laptop-code mr-2"></i>
                Technical Skills
              </h3>
              <ul className="skills-list space-y-3">
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🚀</span>
                  Python & Flask/FastAPI for robust backend development
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">📱</span>
                  Flutter for cross-platform mobile applications
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">💾</span>
                  Database management with Postgres
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🤖</span>
                  Machine Learning with Tensorflow
                </li>
              </ul>
            </div>

            <div className="about-card transition-transform hover:-translate-y-1">
              <h3 className="text-[#018c6d] text-xl font-semibold mb-4">
                <i className="fas fa-book mr-2"></i>
                Currently Learning
              </h3>
              <ul className="skills-list space-y-3">
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🅰️</span>
                  Angular for advanced frontend development
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">⚡</span>
                  Go for high-performance backend services
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🦀</span>
                  Rust (Rust embed) for system programming
                </li>
              </ul>
            </div>

            <div className="about-card transition-transform hover:-translate-y-1">
              <h3 className="text-[#018c6d] text-xl font-semibold mb-4">
                <i className="fas fa-language mr-2"></i>
                Languages
              </h3>
              <ul className="skills-list space-y-3">
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🇮🇳</span>
                  Kannada - Native proficiency
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🇬🇧</span>
                  English - Professional proficiency
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🇮🇳</span>
                  Tamil & Hindi - Basic conversational skills
                </li>
                <li className="flex items-center text-[#ccd6f6]">
                  <span className="skill-icon mr-2">🇮🇳</span>
                  Malayalam & Telugu – Can understand, looking for someone to help me improve
                </li>
              </ul>
            </div>
          </div>

          <div className="about-card fun-fact transition-transform hover:-translate-y-1 w-full">
            <h3 className="text-[#018c6d] text-xl font-semibold mb-4">
              <i className="fas fa-lightbulb mr-2"></i>
              Fun Fact
            </h3>
            <p className="text-[#ccd6f6] leading-relaxed">
              DSA interviews are not my cup of tea, I just get things done the production way. My debugging skills have debugging skills.
            </p>
          </div>
        </div>
      </section>
    </>
  )
} 