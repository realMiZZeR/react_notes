import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PartialIcon} from '../IIcon.ts';

const LockIcon = ({
  parentWidth = 18,
  parentHeight = 18,
  strokeColor,
  strokeWidth,
}: PartialIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        d="M9 10.875V12.375M5.25 7.5216C5.60356 7.5 6.03944 7.5 6.6 7.5H11.4C11.9605 7.5 12.3965 7.5 12.75 7.5216M5.25 7.5216C4.80876 7.54853 4.49572 7.60912 4.22852 7.74525C3.80516 7.96095 3.46095 8.30512 3.24524 8.7285C3 9.20985 3 9.83985 3 11.1V12.15C3 13.4102 3 14.0401 3.24524 14.5215C3.46095 14.9449 3.80516 15.2891 4.22852 15.5048C4.70982 15.75 5.33988 15.75 6.6 15.75H11.4C12.6601 15.75 13.2901 15.75 13.7715 15.5048C14.1949 15.2891 14.5391 14.9449 14.7548 14.5215C15 14.0401 15 13.4102 15 12.15V11.1C15 9.83985 15 9.20985 14.7548 8.7285C14.5391 8.30512 14.1949 7.96095 13.7715 7.74525C13.5043 7.60912 13.1912 7.54853 12.75 7.5216M5.25 7.5216V6C5.25 3.92893 6.92893 2.25 9 2.25C11.071 2.25 12.75 3.92893 12.75 6V7.5216"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LockIcon;
