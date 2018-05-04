import React from 'react';
import { render } from '@untool/core';
import styled from 'styled-components';

const H1 = styled.h1`
  color: red;
`;

export default render(<H1>hello</H1>);
