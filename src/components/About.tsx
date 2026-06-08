import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import {
  PageContainer,
  TimelineSection,
  TimelineItem,
  ProjectsGrid,
  ProjectCard,
} from '../styles/components';

const About: FC = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: theme.colors.accent }}>About me</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>
        Hello! My name is Rui Pinho. Here's some information about me:
      </p>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <a
          href="/RuiPinho_CV_2025.pdf"
          download
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: `1px solid ${theme.colors.accent}`,
            textDecoration: 'none',
            cursor: 'pointer',
            backgroundColor: theme.colors.accent,
            color: 'white',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Download CV
        </a>
      </div>

      <TimelineSection>
        <h2>Professional Journey</h2>
        <TimelineItem>
          <div className="year">2025 - Now</div>
          <div className="content">
            <h4>Senior Project Manager</h4>
            <p>
              <a href="https://sovos.com/" target="_blank" rel="noopener noreferrer">
                Sovos
              </a>
            </p>
            <p>
              Led 40+ end-to-end e-invoicing and tax compliance projects, managing scope, timelines, budget, risks, and stakeholder alignment across clients, internal teams, and external partners.
            </p>
            <p>
              Managed the project lifecycle from kick-off to closure, focusing on quality, predictability, and customer satisfaction.
            </p>
            <p>
              Delivered ERP integrations and ensured compliance with local and international regulatory requirements.
            </p>
            <p>
              Mentored junior PMs and drove continuous process improvement initiatives.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="year">2021 - 2024</div>
          <div className="content">
            <h4>IT Project Manager</h4>
            <p>
              <a href="https://www.broadvoice.com/" target="_blank" rel="noopener noreferrer">
                Broadvoice
              </a>
            </p>
            <p>
              <strong>IT Project Coordinator:</strong> CCaaS{' '}
              <a href="https://www.gocontact.com/" target="_blank" rel="noopener noreferrer">
                GoContact
              </a>
            </p>
            <p>
              <strong>Scrum Master:</strong> Jira, Confluence, Agile/Waterfall methodologies with global distributed teams.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="year">2017 - 2021</div>
          <div className="content">
            <h4>Project Manager & Junior Frontend Developer</h4>
            <p>
              <a href="http://www.sensingfuture.com/" target="_blank" rel="noopener noreferrer">
                Sensing Future Technologies
              </a>
            </p>
            <p>
              <strong>Frontend Developer:</strong> Corporate and project webpages +{' '}
              <a href="http://www.physiosensing.net/" target="_blank" rel="noopener noreferrer">
                PhysioSensing
              </a>
              . Tech stack: HTML/CSS/JavaScript/React.js, C#, WPF
            </p>
            <p>
              <strong>ROSE Project:</strong> Project Manager + Developer. 1M€ 4-year co-funded robotics/telemedicine project (Waterfall).{' '}
              <a href="https://youtu.be/b-PXUVOqjZY" target="_blank" rel="noopener noreferrer">
                Video
              </a>
              . Web interface and backend development with medical device SDK.
            </p>
            <p>
              <strong>Proposal Writer:</strong> Raised &gt;€200k for R&D activities ({' '}
              <a href="https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en" target="_blank" rel="noopener noreferrer">
                Horizon Europe
              </a>
              ,{' '}
              <a href="http://www.aal-europe.eu/" target="_blank" rel="noopener noreferrer">
                AAL
              </a>
              ,{' '}
              <a href="https://portugal2020.pt/" target="_blank" rel="noopener noreferrer">
                PT2020
              </a>
              ).
            </p>
            <p>
              <strong>Medical Certification:</strong> ISO 13485 & 9001 documentation.
            </p>
            <p>
              <strong>Marketing Manager:</strong> Strategy, email campaigns, SEO optimization, video editing (Final Cut Pro X), blog writing.{' '}
              <a href="https://www.youtube.com/c/SensingfuturePtCoimbra/videos" target="_blank" rel="noopener noreferrer">
                YouTube Channel
              </a>
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="year">2014 - 2015</div>
          <div className="content">
            <h4>Research Fellow</h4>
            <p>
              Dept. of Chemical Engineering -{' '}
              <a href="https://www.uc.pt/en/fctuc/deq" target="_blank" rel="noopener noreferrer">
                University of Coimbra
              </a>
            </p>
            <p>
              Built and extensively tested an innovative medical device.{' '}
              <a href="https://estudogeral.uc.pt/handle/10316/36257" target="_blank" rel="noopener noreferrer">
                Research
              </a>
            </p>
            <p>
              Mastered particle size analysis (DLS), electron microscopy (SEM/TEM), contact angle/transmittance analysis, bulk copolymerization, and sol-gel methods.
            </p>
          </div>
        </TimelineItem>
      </TimelineSection>

      <TimelineSection>
        <h2>Education</h2>
        <TimelineItem>
          <div className="year">2010 - 2015</div>
          <div className="content">
            <h4>MSc in Biomedical Engineering</h4>
            <p>
              <a href="https://www.uc.pt/en/fctuc/df/teaching/biomedical-engineering/" target="_blank" rel="noopener noreferrer">
                University of Coimbra
              </a>
            </p>
            <p>Specialization in Biomedical Instrumentation and Biomaterials.</p>
            <p>
              <strong>Side Project:</strong> ABB Ball Dealer - User interface for a robot controller (C#).{' '}
              <a href="https://youtu.be/tyQr7PQp8zw" target="_blank" rel="noopener noreferrer">
                Video
              </a>
            </p>
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
