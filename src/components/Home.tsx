import React, { FC } from 'react';
import {
  PageContainer,
  HeroSection,
  FeatureGrid,
  FeatureCard,
} from '../styles/components';
import ruipic from '../logo512.png';
import htmlcssjs from '../htmlcssjs.png';

const Home: FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <img src={ruipic} alt="Rui Pinho" />
        <h1>Welcome</h1>
        <p>I'm Rui Pinho, a full-stack developer passionate about creating beautiful, functional digital experiences.</p>
      </HeroSection>

      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>About This Project</h2>
        <FeatureGrid>
          <FeatureCard>
            <h3>🎨 Modern Design</h3>
            <p>Built with React and TypeScript, featuring a responsive and accessible interface that works seamlessly across all devices.</p>
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
        <div style={{ marginTop: '2rem' }}>
          <img src={htmlcssjs} alt="HTML CSS JavaScript" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <p style={{ marginTop: '2rem', fontSize: '1rem' }}>React • TypeScript • Styled Components • React Router • Bootstrap</p>
      </section>
    </PageContainer>
  );
};

export default Home;
