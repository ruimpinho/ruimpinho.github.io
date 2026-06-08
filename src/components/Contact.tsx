import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Button } from 'react-bootstrap';
import { PageContainer, ContactButtons } from '../styles/components';

const Contact: FC = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: theme.colors.accent }}>Let's Connect</h1>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
          I'm always interested in hearing from people. Whether you have an opportunity, question, or just want to say hi, feel free to reach out!
        </p>

        <ContactButtons>
          <a href="https://www.linkedin.com/in/rmapinho/" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" style={{ width: '100%' }}>
              💼 LinkedIn Profile
            </Button>
          </a>
          <a href="https://github.com/ruimpinho/" target="_blank" rel="noopener noreferrer">
            <Button variant="dark" style={{ width: '100%' }}>
              🐙 GitHub Profile
            </Button>
          </a>
        </ContactButtons>
      </div>
    </PageContainer>
  );
};

export default Contact;
