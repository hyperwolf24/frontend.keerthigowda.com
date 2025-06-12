import { contactMetadata } from '../metadata'
import styles from './contact.module.css'

export const metadata = contactMetadata

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={styles.contactInfo}>
          <a 
            href="mailto:mail@keerthigowda.com" 
            className={styles.contactLink}
          >
            <i className="fas fa-envelope"></i>
            <span>Email Me</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/keerthi-gowdad11/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/hyperwolf24" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
} 