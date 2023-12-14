import React from 'react';
import Svg, {ClipPath, Defs, G, Mask, Path, Rect} from 'react-native-svg';
import {PartialIcon} from '../IIcon.ts';

const EnterIcon = ({
  parentWidth = 18,
  parentHeight = 18,
  strokeColor = '#000',
  strokeWidth = 1.5,
}: PartialIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_4_619)">
        <Mask
          id="mask0_4_619"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={parentWidth}
          height={parentHeight}>
          <Path d="M24 0H0V24H24V0Z" fill="white" />
        </Mask>
        <G mask="url(#mask0_4_619)">
          <Path
            d="M9 4.00018H19V18.0002C19 19.1048 18.1046 20.0002 17 20.0002H9"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M12 15.0002L15 12.0002M15 12.0002L12 9.00018M15 12.0002H5"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_4_619">
          <Rect width={parentWidth} height={parentHeight} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EnterIcon;
