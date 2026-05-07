import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0 6rem;
  margin-bottom: 4rem;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, ${props => props.theme.colors.text}, ${props => props.theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.8;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin: 2rem auto;
    border: 2px solid ${props => props.theme.colors.border};
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FeatureCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  h3 {
    margin-top: 0;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

export const TimelineSection = styled.section`
  margin: 4rem 0;

  h2 {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${props => props.theme.colors.surface};
  border-left: 3px solid ${props => props.theme.colors.accent};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.background};
    border-left-color: ${props => props.theme.colors.text};
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1.5rem;
  }

  .year {
    font-weight: 700;
    color: ${props => props.theme.colors.accent};
    font-size: 1.25rem;
    white-space: nowrap;
  }

  .content {
    flex: 1;

    h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0.5rem 0;
      font-size: 0.95rem;
    }

    a {
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProjectCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    transform: translateY(-8px);
  }

  iframe {
    width: 100%;
    height: 250px;
    border: none;
  }

  .project-info {
    padding: 2rem;

    h4 {
      margin-top: 0;
      margin-bottom: 0.75rem;
      color: ${props => props.theme.colors.text};
    }

    p {
      font-size: 0.95rem;
      margin: 0;
    }
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  button {
    padding: 0.875rem 2rem;
    background: ${props => props.theme.colors.accent};
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.85;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  a button {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  line-height: 1.8;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.textSecondary};

  strong {
    color: ${props => props.theme.colors.text};
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;
