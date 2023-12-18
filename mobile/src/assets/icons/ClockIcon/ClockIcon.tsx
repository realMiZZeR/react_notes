import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {PartialIcon} from '../IIcon.ts';

const ClockIcon = ({size = 16, strokeColor = '#000'}: PartialIcon) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M6 3.5V6H7.5M10.5 6C10.5 8.4853 8.4853 10.5 6 10.5C3.51472 10.5 1.5 8.4853 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.4853 1.5 10.5 3.51472 10.5 6Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ClockIcon;
