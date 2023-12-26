import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PartialIcon} from '../IIcon.ts';

const RepeatIcon = ({size, strokeColor}: PartialIcon) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.99992 13.6667C11.1295 13.6667 13.6666 11.1297 13.6666 8.00007C13.6666 6.11637 12.7475 4.44735 11.3333 3.417M8.66658 14.9334L7.33325 13.6001L8.66658 12.2667M7.99992 2.3334C4.87031 2.3334 2.33325 4.87045 2.33325 8.00007C2.33325 9.88373 3.25237 11.5528 4.66658 12.5831M7.33325 3.7334L8.66658 2.40007L7.33325 1.06673"
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default RepeatIcon;
