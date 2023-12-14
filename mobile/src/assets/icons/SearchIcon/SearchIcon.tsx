import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PartialIcon} from '../IIcon.ts';

const SearchIcon = ({
  parentWidth = 16,
  parentHeight = 16,
  strokeColor = '#000',
  strokeWidth = 1.5,
}: PartialIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
