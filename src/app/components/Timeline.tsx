'use client'

import { ReactNode, useRef } from 'react'
import styles from '../about/about.module.css'

interface TimelineItemProps {
  title: string
  dateTime: string
  company: string
  description: string[]
  icon?: string
  lastItem?: boolean
}

interface TimelineListProps {
  children: ReactNode
  title?: string
}

export function TimelineItem({ title, dateTime, company, description, icon }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={`${styles.timelineContent} bg-[#112240]/60 backdrop-blur-sm rounded-xl p-6 transform hover:scale-[1.02] transition-transform duration-300`}>
        <h4 className={styles.timelineTitle}>
          {icon && <i className={`fas fa-${icon} mr-2`}></i>}
          {title}
        </h4>
        <span className={styles.timelineDate}>{dateTime}</span>
        <h5 className={styles.timelineCompany}>{company}</h5>
        <ul className={styles.timelineList}>
          {description.map((item, index) => (
            <li key={index} className={styles.timelineListItem}>
              <span className={styles.timelineBullet}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function TimelineList({ children, title }: TimelineListProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.careerTimeline}>
      {title && (
        <h3 className="text-[#018c6d] text-2xl font-semibold mb-8 text-center">
          <i className="fas fa-briefcase mr-2"></i>
          {title}
        </h3>
      )}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#018c6d] text-white rounded-full hover:bg-[#016b54] transition-colors flex items-center justify-center shadow-lg"
          aria-label="Scroll left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div ref={timelineRef} className={styles.timelineContainer}>
          {children}
        </div>
        <button
          onClick={scrollRight}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#018c6d] text-white rounded-full hover:bg-[#016b54] transition-colors flex items-center justify-center shadow-lg"
          aria-label="Scroll right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
} 