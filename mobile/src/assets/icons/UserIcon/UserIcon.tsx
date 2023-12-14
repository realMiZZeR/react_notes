import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIcon} from '../IIcon.ts';

const UserIcon = ({
  parentWidth = 16,
  parentHeight = 16,
  fill = '#000',
}: IIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        d="M16.1071 14.2107C15.4416 13.0277 14.3516 11.6878 12.5771 10.926C11.5622 11.636 10.3293 12.0541 9.00016 12.0541C7.67027 12.0541 6.43734 11.6361 5.42242 10.926C3.64794 11.6878 2.55792 13.0277 1.8928 14.2107C1.01006 15.7798 1.70215 18 3.22881 18C4.7555 18 9.0002 18 9.0002 18C9.0002 18 13.2445 18 14.7712 18C16.2978 18 16.9899 15.7798 16.1071 14.2107Z"
        fill={fill}
      />
      <Path
        d="M9.00019 10.5694C11.6068 10.5694 13.7193 8.45624 13.7193 5.84997V4.71941C13.7193 2.11317 11.6068 0 9.00019 0C6.39318 0 4.2804 2.11317 4.2804 4.71945V5.85C4.2804 8.45624 6.39322 10.5694 9.00019 10.5694Z"
        fill={fill}
      />
    </Svg>
  );
};

export default UserIcon;
