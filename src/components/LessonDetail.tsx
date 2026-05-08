import { useState, useRef, useEffect } from 'react';
import type { QuizQuestion } from '../content/lessons';
import AdComponent from './AdComponent';

interface LessonDetailProps {
  day: string;
  title: string;
  image: string;
  content: string;
  quizData?: QuizQuestion[];
  onBack: () => void;
}

const LessonDetail = ({ day, title, image, content, quizData, onBack }: LessonDetailProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const quizRef = useRef<HTMLDivElement>(null);

  // Scroll to the top of the quiz section when question changes
  useEffect(() => {
    if (quizData && !showResult && selectedOption === null && quizRef.current) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = quizRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [currentQuestionIndex, showResult]);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(index);
    const correct = index === quizData![currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizData!.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const isPassing = score >= 8;

  return (
    <div className="container fade-in" style={{padding: '4rem 2rem'}}>
      <button onClick={onBack} style={{marginBottom: '2rem', color: 'var(--accent-color)', background: 'none', fontWeight: '600', border: 'none', cursor: 'pointer'}}>
        ← カリキュラム一覧に戻る
      </button>
      
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <span className="lesson-tag">{day}</span>
        <h1 style={{fontSize: '3rem', marginBottom: '2rem'}}>{title}</h1>
        <img src={image} alt={title} style={{width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', boxShadow: 'var(--shadow-lg)'}} />
        
        <div 
          className="article-content" 
          style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '3rem'}}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <AdComponent slot="lesson-bottom" />

        {quizData && (
          <div 
            ref={quizRef}
            className="quiz-section glass" 
            style={{padding: '3rem', borderRadius: 'var(--radius-lg)', border: '2px solid var(--accent-color)', minHeight: '500px'}}
          >
            {!showResult ? (
              <>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: '600', color: 'var(--text-muted)'}}>
                  <span>Question {currentQuestionIndex + 1} / {quizData.length}</span>
                  <span>Score: {score}</span>
                </div>
                
                <h3 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>{quizData[currentQuestionIndex].question}</h3>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  {quizData[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(index)}
                      className="quiz-option"
                      style={{
                        padding: '1.25rem',
                        textAlign: 'left',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                        background: selectedOption === index 
                          ? (index === quizData[currentQuestionIndex].correctAnswer ? '#d4edda' : '#f8d7da')
                          : 'var(--surface-color)',
                        color: selectedOption === index ? '#155724' : 'var(--text-primary)',
                        fontSize: '1.1rem',
                        transition: 'all 0.2s',
                        cursor: selectedOption !== null ? 'default' : 'pointer'
                      }}
                      disabled={selectedOption !== null}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {selectedOption !== null && (
                  <div className="fade-in" style={{marginTop: '2rem', padding: '1.5rem', borderRadius: 'var(--radius-md)', background: isCorrect ? 'rgba(52, 168, 83, 0.1)' : 'rgba(234, 67, 53, 0.1)', border: `1px solid ${isCorrect ? '#34a853' : '#ea4335'}`}}>
                    <p style={{fontWeight: '700', color: isCorrect ? '#1e7e34' : '#c82333', marginBottom: '0.5rem'}}>
                      {isCorrect ? '✅ 正解！' : '❌ 不正解...'}
                    </p>
                    <p style={{color: 'var(--text-secondary)', fontSize: '1rem'}}>{quizData[currentQuestionIndex].explanation}</p>
                    <button 
                      onClick={handleNextQuestion}
                      className="cta-button"
                      style={{marginTop: '1.5rem', width: '100%'}}
                    >
                      {currentQuestionIndex + 1 === quizData.length ? '結果を見る' : '次の問題へ'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div style={{textAlign: 'center'}} className="fade-in">
                <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
                  {isPassing ? '🎉 おめでとうございます！' : '🎯 お疲れ様でした！'}
                </h2>
                <div style={{fontSize: '4rem', fontWeight: '700', color: isPassing ? '#34a853' : 'var(--text-primary)', marginBottom: '1rem'}}>
                  {score * 10}点
                </div>
                <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem'}}>
                  {isPassing 
                    ? '見事合格です！あなたは立派なAIエージェント・ディレクターです。' 
                    : '惜しい！合格（80点）まであと少しです。もう一度挑戦してみましょう。'}
                </p>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                  {!isPassing && (
                    <button onClick={handleRestart} className="cta-button" style={{background: 'var(--text-primary)'}}>
                      もう一度挑戦する
                    </button>
                  )}
                  <button onClick={onBack} className="cta-button">
                    カリキュラム一覧に戻る
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetail;
