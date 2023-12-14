import {PartialIcon} from '../IIcon.ts';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SunIcon = ({
  parentWidth = 16,
  parentHeight = 16,
  strokeColor = '#000',
  strokeWidth = 1.5,
}: PartialIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        d="M9 2.25V3M9 15V15.75M3 9H2.25M4.73559 4.73559L4.125 4.125M13.2644 4.73559L13.875 4.125M4.73559 13.2675L4.125 13.8751M13.2644 13.2675L13.875 13.8751M15.75 9H15M12 9C12 10.6568 10.6568 12 9 12C7.34314 12 6 10.6568 6 9C6 7.34314 7.34314 6 9 6C10.6568 6 12 7.34314 12 9Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SunIcon;
