import React from 'react';
import { css } from '@emotion/core';

if (process.env.NODE_ENV !== 'production') {
  console.log('I should be eliminated');
}

if (process.env.NODE_ENV === 'production') {
  console.log('I should not be eliminated');
}

const style = css`
  color: red;
`;

function Something() {
  return (
    <div css={style}>
      Notice that the above statement "I should be eliminated" is removed, but emotion stuff is not
      - it has both dev and prod conditionals built in
    </div>
  );
}

export default Something;
