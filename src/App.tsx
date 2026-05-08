import { useState, useEffect } from 'react'
import './App.css'
import LessonDetail from './components/LessonDetail'
import AdComponent from './components/AdComponent'
import { lessons } from './content/lessons'
import type { LessonContent } from './content/lessons'

function App() {
  const [selectedLesson, setSelectedLesson] = useState<LessonContent | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Reset scroll position when a lesson is selected or when returning to curriculum
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedLesson]);

  const totalDays = 10;
  const availableDaysCount = lessons.length;
  // Note: Day 11 is the Final Quiz, so we adjust placeholder calculation
  const placeholderDays = Array.from({ length: Math.max(0, totalDays - availableDaysCount + 1) }, (_, i) => availableDaysCount + i + 1);

  return (
    <div className="app-container">
      <header className="header glass">
        <div className="container header-content">
          <div className="logo" onClick={() => setSelectedLesson(null)} style={{cursor: 'pointer'}}>
            <span>🚀</span> Antigravity Mastery
          </div>
          <nav className="nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedLesson(null); }}>Curriculum</a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              style={{background: 'none', fontSize: '1.2rem', padding: '5px', cursor: 'pointer'}}
              title="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {selectedLesson ? (
          <LessonDetail 
            day={selectedLesson.day} 
            title={selectedLesson.title} 
            image={selectedLesson.image} 
            content={selectedLesson.content}
            quizData={selectedLesson.quizData}
            onBack={() => setSelectedLesson(null)} 
          />
        ) : (
          <>
            <section className="hero fade-in">
              <div className="container">
                <h1>AIエージェントを、<br/>あなたの「最強の部下」にする。</h1>
                <p>
                  40代からのAI再入門。チャットするだけではなく、実際に「動くAI」を10日間でマスターし、業務の景色を変えましょう。
                </p>
                <button className="cta-button" onClick={() => setSelectedLesson(lessons[0])}>学習を始める</button>
              </div>
            </section>

            <section className="container">
              <AdComponent slot="home-top" style={{maxWidth: '1200px', margin: '2rem auto'}} />
            </section>

            <section className="container">
              <div className="lesson-grid">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="lesson-card fade-in" onClick={() => setSelectedLesson(lesson)} style={{cursor: 'pointer'}}>
                    <img src={lesson.image} alt={lesson.title} className="lesson-image" />
                    <div className="lesson-content">
                      <span className="lesson-tag">{lesson.day}</span>
                      <h3 className="lesson-title">{lesson.title}</h3>
                      <p className="lesson-excerpt">{lesson.excerpt}</p>
                      <div className="lesson-footer">
                        <span>⏱ {lesson.duration}</span>
                        <span style={{color: 'var(--accent-color)', fontWeight: '600'}}>Read More →</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {placeholderDays.filter(day => day > lessons.length && day <= 10).map(day => (
                  <div key={day} className="lesson-card fade-in" style={{opacity: 0.6}}>
                    <div className="lesson-image" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--border-color)'}}>Coming Soon</div>
                    <div className="lesson-content">
                      <span className="lesson-tag">Day {day < 10 ? '0' + day : day}</span>
                      <h3 className="lesson-title">近日公開</h3>
                      <p className="lesson-excerpt">さらに高度なAntigravityの活用術を準備中です。</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Antigravity Mastery. Powered by Advanced AI Agency.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
