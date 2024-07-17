import React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(3),
  backgroundColor: '#f4f4f4',
}));

const StepperContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#333333',
}));

const StepperStyled = styled(Stepper)(({ theme }) => ({
  backgroundColor: 'inherit',
}));

const StepLabelStyled = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    color: '#666666',
    fontWeight: 500,
  },
}));

const StepContentStyled = styled(StepContent)(({ theme }) => ({
  borderLeft: '2px solid #ff6600',
  paddingLeft: theme.spacing(2),
  marginLeft: theme.spacing(1),
}));

function getSteps() {
  return [
    { label: '1983-1985', title: 'Beginning', content: 'The idea behind company formation originated in the mid-90s to Jacob William...' },
    { label: '1986-1997', title: 'Early Formative Years', content: 'We started our operations in 2002, by offering "Data Processing Solutions"...' },
    { label: '1998-TODAY', title: 'The Growth Trajectory', content: 'Today, We and its associate companies have more than 2000 employees...' },
  ];
}

export default function VerticalStepper() {
  const steps = getSteps();

  return (
    <Root>
      <StepperContainer>
        <Heading variant="h4">
          Company Story
        </Heading>
        <StepperStyled orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} active>
              <StepLabelStyled>{step.label}</StepLabelStyled>
              <StepContentStyled>
                <Typography variant="h6">{step.title}</Typography>
                <Typography>{step.content}</Typography>
              </StepContentStyled>
            </Step>
          ))}
        </StepperStyled>
      </StepperContainer>
    </Root>
  );
}
