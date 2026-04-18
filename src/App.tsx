import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Button } from 'antd';
import 'antd/dist/reset.css';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function App() {
  // 6월 일본 3일 여행 일정 데이터
  const japanTrip = [
    {
      day: 1,
      title: '1일차: 도쿄 도착 & 시내 관광',
      plan: [
        '오전: 하네다/나리타 공항 도착',
        '호텔 체크인 및 짐 보관',
        '아사쿠사 센소지 방문',
        '스카이트리 전망대',
        '우에노 공원 산책',
        '저녁: 시부야/신주쿠 야경 및 쇼핑'
      ]
    },
    {
      day: 2,
      title: '2일차: 근교 투어 (요코하마/가마쿠라)',
      plan: [
        '오전: 요코하마 차이나타운',
        '요코하마 코스모월드',
        '가마쿠라 대불/츠루가오카 하치만구',
        '에노시마 해변 산책',
        '저녁: 도쿄 귀환, 이자카야 체험'
      ]
    },
    {
      day: 3,
      title: '3일차: 도쿄 자유 일정 & 귀국',
      plan: [
        '오전: 하라주쿠/오모테산도 산책',
        '메이지 신궁 방문',
        '도쿄역/긴자 쇼핑',
        '공항 이동 및 귀국'
      ]
    }
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setCurrent((prev) => (prev < japanTrip.length - 1 ? prev + 1 : prev));

  // 방향키로 페이지 넘기기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current]);

  return (
    <>
      <section id="japan-trip" style={{ padding: '48px 0', textAlign: 'center', minHeight: 500 }}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="일본 여행" style={{ maxWidth: '100%', borderRadius: 16, marginBottom: 32 }} />
        <h1 style={{ fontSize: 44, marginBottom: 20, letterSpacing: 2 }}>6월 일본 3일 여행 발표</h1>
        <p style={{ fontSize: 22, maxWidth: 700, margin: '0 auto 36px', color: '#555' }}>
          일본 도쿄 및 근교를 3일간 여행하는 추천 일정입니다.<br />
          각 일자별 주요 코스를 발표 형식으로 한 화면씩 보여줍니다.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, margin: '40px 0' }}>
          <Button
            type="text"
            icon={<LeftOutlined />}
            onClick={handlePrev}
            disabled={current === 0}
            style={{ fontSize: 32, padding: 0, color: current === 0 ? '#ccc' : '#333', background: 'none', border: 'none' }}
            aria-label="이전"
          />
          <div style={{ minWidth: 340, maxWidth: 420, background: '#f7f7fa', borderRadius: 16, boxShadow: '0 4px 16px #0002', padding: 36, marginBottom: 0 }}>
            <h2 style={{ fontSize: 30, marginBottom: 20, color: '#1a237e' }}>{japanTrip[current].title}</h2>
            <ol style={{ textAlign: 'left', fontSize: 20, lineHeight: 2, paddingLeft: 24 }}>
              {japanTrip[current].plan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>
          <Button
            type="text"
            icon={<RightOutlined />}
            onClick={handleNext}
            disabled={current === japanTrip.length - 1}
            style={{ fontSize: 32, padding: 0, color: current === japanTrip.length - 1 ? '#ccc' : '#333', background: 'none', border: 'none' }}
            aria-label="다음"
          />
        </div>
        <div style={{ fontSize: 18, color: '#888', marginTop: 24 }}>
          {current + 1} / {japanTrip.length}일차
        </div>
      </section>
    </>
  )
}

export default App
