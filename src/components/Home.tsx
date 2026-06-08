import React, { FC } from 'react';
import {
  PageContainer,
  HeroSection,
  FeatureGrid,
  FeatureCard,
} from '../styles/components';
import ruipic from '../logo512.png';

const Home: FC = () => {
  const skillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.35rem',
    padding: '0.8rem 1.2rem',
    borderRadius: '999px',
    border: '1px solid rgba(0, 113, 227, 0.3)',
    background: 'rgba(0, 113, 227, 0.08)',
    color: '#073B8F',
    fontSize: '0.95rem',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    cursor: 'default' as const,
  };

  const skillHoverStyle = {
    background: '#0071E3',
    color: 'white',
    borderColor: '#0071E3',
  };

  return (
    <PageContainer>
      <HeroSection>
        <img src={ruipic} alt="Rui Pinho" />
        <h1>Rui Pinho</h1>
        <p>Welcome! I'm a IT project manager, passionate about creating beautiful, functional digital experiences.</p>
      </HeroSection>

      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>About This Website</h2>
        <FeatureGrid>
          <FeatureCard>
            <h3>🎨 Modern Design</h3>
            <p>Built with React and TypeScript, featuring a responsive and mobile friendly interface that works seamlessly across all devices.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>🌙 Dark Mode</h3>
            <p>Toggle between light and dark themes using styled-components and React hooks for a personalized viewing experience.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>🧭 Multi-Page</h3>
            <p>Navigating through different sections using React Router while maintaining smooth transitions and consistent styling.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>⚡ Performance</h3>
            <p>Optimized for speed with proper code splitting and minimal dependencies, ensuring fast load times.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>💾 State Persistence</h3>
            <p>Your theme preference is automatically saved to localStorage for a seamless experience on your next visit.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>🔧 Bootstrap UI</h3>
            <p>Leveraging Bootstrap components alongside custom styling for a polished and professional appearance.</p>
          </FeatureCard>
        </FeatureGrid>
      </section>

      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2>Tech Stack</h2>
        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['React', 'TypeScript', 'styled-components', 'React Router', 'Bootstrap', 'react-switch'].map((skill) => (
            <span
              key={skill}
              style={skillStyle}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLSpanElement).style, skillHoverStyle)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLSpanElement).style, skillStyle)}
            >
              {skill}
            </span>
          ))}
        </div>
        <p style={{ marginTop: '2rem', fontSize: '1rem' }}> </p>
      </section>
    </PageContainer>
  );
};

export default Home;
