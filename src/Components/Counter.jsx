import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useCountUp from '../hooks/useCountUp'

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: theme.spacing(5),
  backgroundColor: '#ffffff',
}));

const CounterBox = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));

const Icon = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  color: '#3f51b5',
  marginBottom: theme.spacing(2),
}));

const CounterText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#666',
}));

export default function Counters() {
  const experts = useCountUp(0, 450, 2000);
  const offices = useCountUp(0, 17, 2000);
  const projects = useCountUp(0, 218, 2000);
  const clients = useCountUp(0, 19000, 2000);

  return (
    <Container>
      <CounterBox>
        <Icon>🧩</Icon>
        <CounterText>{experts}</CounterText>
        <Description>Experts across a range of specializations</Description>
      </CounterBox>
      <CounterBox>
        <Icon>💡</Icon>
        <CounterText>{offices}</CounterText>
        <Description>Offices in 6 Countries Worldwide</Description>
      </CounterBox>
      <CounterBox>
        <Icon>⏱</Icon>
        <CounterText>{projects}</CounterText>
        <Description>Projects had finished</Description>
      </CounterBox>
      <CounterBox>
        <Icon>🌐</Icon>
        <CounterText>{clients}</CounterText>
        <Description>Happy clients from largest corporations</Description>
      </CounterBox>
    </Container>
  );
}
