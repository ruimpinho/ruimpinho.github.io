import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import {
  PageContainer,
  TimelineSection,
  TimelineItem,
  ProjectsGrid,
  ProjectCard,
} from '../styles/components';

const About: FC = () => {
  return (
    <PageContainer>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>About me</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>
        Hello! My name is Rui Pinho. Here's some information about me:
      </p>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Button
          variant="outline-primary"
          href="https://www.icloud.com/iclouddrive/0XX1cT_bGKGS4216vZL_F0ASg#RuiPinho21"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
        >
          Download CV
        </Button>
      </div>

      <TimelineSection>
        <h2>Journey</h2>
        <TimelineItem>
          <div className="year">2021</div>
          <div className="content">
            <h4>Continuous Learning</h4>
            <p>
              Always improving my skills using{' '}
              <a href="https://www.theodinproject.com/paths/foundations/courses/foundations" target="_blank" rel="noopener noreferrer">
                The Odin Project
              </a>{' '}
              and{' '}
              <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">
                Codewars
              </a>
              . Built more side projects with Node.js and React.js. Improved knowledge in Git.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="year">2021</div>
          <div className="content">
            <h4>Full-Time Developer</h4>
            <p>
              Started full-time software development journey. Built beginner projects with{' '}
              <a href="https://www.freecodecamp.org/ruimpinho" target="_blank" rel="noopener noreferrer">
                FreeCodeCamp
              </a>{' '}
              and{' '}
              <a href="https://codepen.io/ruimpinho" target="_blank" rel="noopener noreferrer">
                CodePen
              </a>
              . Earned{' '}
              <a href="https://www.freecodecamp.org/certification/ruimpinho/responsive-web-design" target="_blank" rel="noopener noreferrer">
                certifications
              </a>{' '}
              in responsive web design.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="year">2017</div>
          <div className="content">
            <h4>Sensing Future Technologies</h4>
            <p>
              Joined{' '}
              <a href="https://sensingfuture.com/en/" target="_blank" rel="noopener noreferrer">
                Sensing Future Technologies
              </a>{' '}
              as a software developer and project manager. Main stack: C#, WPF and HTML/CSS/JS.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="year">2015</div>
          <div className="content">
            <h4>Master's Degree</h4>
            <p>Completed Master's Degree in Biomedical Engineering. Learned fundamentals of Computer Science.</p>
          </div>
        </TimelineItem>
      </TimelineSection>

      <ProjectsGrid>
        <ProjectCard>
          <iframe
            src="https://www.youtube.com/embed/b-PXUVOqjZY"
            title="ROSE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="project-info">
            <h4>ROSE</h4>
            <p>Built the UI and video transmission method using SDK from an ultrasound probe. (HTML/CSS/JS and C#).</p>
          </div>
        </ProjectCard>

        <ProjectCard>
          <iframe
            src="https://www.youtube.com/embed/mAHisGCOYgw"
            title="PhysioSensing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="project-info">
            <h4>PhysioSensing</h4>
            <p>Built new features for medical device software used to assess balance and gait. (WPF, SQL).</p>
          </div>
        </ProjectCard>

        <ProjectCard>
          <iframe
            src="https://www.youtube.com/embed/tyQr7PQp8zw"
            title="ABB Ball Dealer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="project-info">
            <h4>ABB Ball Dealer</h4>
            <p>Manipulation software for ABB robot. Built the visual interface for general users in C#.</p>
          </div>
        </ProjectCard>
      </ProjectsGrid>
    </PageContainer>
  );
};

export default About;
