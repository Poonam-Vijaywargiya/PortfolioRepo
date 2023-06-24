import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'MS', text: 'Won Outstanding Performance awards in Q1,Q2'},
  { number: 'SAP Labs', text: 'Won Spot Award for handling multiple roles', },
  { number: 'HeakerEarth', text: 'Won third prize at NEC Hackathon', },
  { number: 'GE', text: 'Got star of the quarter,Above and beyond awards', },
  { number: 'Harman', text: 'Got client orientation award for client polycom', },
  { number: 'TCS', text: 'Got 100% CSI award for client qualcomm', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
