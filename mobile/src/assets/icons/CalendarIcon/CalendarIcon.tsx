import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PartialIcon} from '../IIcon.ts';

const CalendarIcon = ({
  parentWidth = 16,
  parentHeight = 16,
  strokeColor = '#000',
}: PartialIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 12 12"
      fill="none">
      <Path
        d="M1.5 4.5H10.5M8.5 6.5007L3.5 6.5M5.16665 8.50025L3.5 8.5M3.5 1.5V2.5M8.5 1.5V2.5M3.1 10.5H8.9C9.46005 10.5 9.7401 10.5 9.954 10.391C10.1422 10.2951 10.2951 10.1422 10.391 9.954C10.5 9.7401 10.5 9.46005 10.5 8.9V4.1C10.5 3.53994 10.5 3.25992 10.391 3.04601C10.2951 2.85785 10.1422 2.70486 9.954 2.60899C9.7401 2.5 9.46005 2.5 8.9 2.5H3.1C2.53995 2.5 2.25992 2.5 2.04601 2.60899C1.85785 2.70486 1.70486 2.85785 1.60899 3.04601C1.5 3.25992 1.5 3.53994 1.5 4.1V8.9C1.5 9.46005 1.5 9.7401 1.60899 9.954C1.70486 10.1422 1.85785 10.2951 2.04601 10.391C2.25992 10.5 2.53994 10.5 3.1 10.5Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CalendarIcon;
