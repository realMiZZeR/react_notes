import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIcon} from '../IIcon.ts';

interface IEditIcon {
  parentWidth: number;
  parentHeight: number;
  strokeColor?: string;
  strokeWidth?: number;
}

const EditIcon = ({
  parentWidth = 24,
  parentHeight = 24,
  strokeColor = '#000',
  strokeWidth = 1.5,
}: IIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M21.7799 6.40005L12.2399 15.94C11.2899 16.89 8.46987 17.33 7.83987 16.7C7.20987 16.07 7.63987 13.25 8.58987 12.3L18.1399 2.75002C18.3754 2.49308 18.6605 2.28654 18.9781 2.14284C19.2956 1.99914 19.639 1.92124 19.9875 1.9139C20.3359 1.90657 20.6823 1.96991 21.0056 2.10012C21.3289 2.23033 21.6225 2.42473 21.8686 2.67153C22.1147 2.91833 22.3083 3.21243 22.4376 3.53609C22.5669 3.85976 22.6294 4.20626 22.6211 4.55471C22.6128 4.90316 22.5339 5.24635 22.3894 5.5635C22.2448 5.88065 22.0375 6.16524 21.7799 6.40005Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5 4H6.5C5.43913 4 4.42178 4.42142 3.67163 5.17157C2.92149 5.92172 2.5 6.93913 2.5 8V18C2.5 19.0609 2.92149 20.0783 3.67163 20.8284C4.42178 21.5786 5.43913 22 6.5 22H17.5C19.71 22 20.5 20.2 20.5 18V13"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EditIcon;
