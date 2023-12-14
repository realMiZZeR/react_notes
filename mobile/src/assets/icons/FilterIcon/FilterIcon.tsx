import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PartialIcon} from '../IIcon.ts';

const FilterIcon = ({
  parentWidth = 16,
  parentHeight = 16,
  strokeColor = '#000',
  strokeWidth = 2,
}: PartialIcon) => {
  return (
    <Svg
      width={parentWidth}
      height={parentHeight}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7424 8.01596C11.2257 7.28967 11.1042 6.31901 10.4569 5.73419C9.80956 5.14938 8.83158 5.12678 8.15793 5.68108C7.48428 6.23536 7.31811 7.19937 7.76731 7.94721C8.2165 8.69505 9.1456 9.00119 9.95135 8.66684C10.2733 8.53249 10.5486 8.30606 10.7424 8.01596Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7424 17.9184C11.2257 17.1921 11.1042 16.2214 10.4569 15.6366C9.80956 15.0517 8.83158 15.0292 8.15793 15.5835C7.48428 16.1378 7.31811 17.1018 7.76731 17.8497C8.2165 18.5975 9.1456 18.9036 9.95135 18.5693C10.2733 18.4349 10.5486 18.2085 10.7424 17.9184Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2575 12.9666C12.7743 12.2404 12.8957 11.2697 13.543 10.6849C14.1904 10.1001 15.1683 10.0775 15.842 10.6318C16.5157 11.1861 16.6819 12.15 16.2326 12.8979C15.7834 13.6457 14.8543 13.9519 14.0486 13.6175C13.7266 13.4832 13.4514 13.2567 13.2575 12.9666Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.0401 6.3129C10.6424 6.3129 10.3201 6.63525 10.3201 7.0329C10.3201 7.43054 10.6424 7.7529 11.0401 7.7529V6.3129ZM18.7201 7.7529C19.1177 7.7529 19.4401 7.43054 19.4401 7.0329C19.4401 6.63525 19.1177 6.3129 18.7201 6.3129V7.7529ZM7.51398 7.7529C7.91162 7.7529 8.23398 7.43054 8.23398 7.0329C8.23398 6.63525 7.91162 6.3129 7.51398 6.3129V7.7529ZM5.28006 6.3129C4.88242 6.3129 4.56006 6.63525 4.56006 7.0329C4.56006 7.43054 4.88242 7.7529 5.28006 7.7529V6.3129ZM11.0401 16.2162C10.6424 16.2162 10.3201 16.5386 10.3201 16.9362C10.3201 17.3339 10.6424 17.6562 11.0401 17.6562V16.2162ZM18.7201 17.6562C19.1177 17.6562 19.4401 17.3339 19.4401 16.9362C19.4401 16.5386 19.1177 16.2162 18.7201 16.2162V17.6562ZM7.51398 17.6562C7.91162 17.6562 8.23398 17.3339 8.23398 16.9362C8.23398 16.5386 7.91162 16.2162 7.51398 16.2162V17.6562ZM5.28006 16.2162C4.88242 16.2162 4.56006 16.5386 4.56006 16.9362C4.56006 17.3339 4.88242 17.6562 5.28006 17.6562V16.2162ZM12.9601 12.7045C13.3577 12.7045 13.6801 12.3822 13.6801 11.9845C13.6801 11.5869 13.3577 11.2645 12.9601 11.2645V12.7045ZM5.28006 11.2645C4.88242 11.2645 4.56006 11.5869 4.56006 11.9845C4.56006 12.3822 4.88242 12.7045 5.28006 12.7045V11.2645ZM16.4861 11.2645C16.0885 11.2645 15.7661 11.5869 15.7661 11.9845C15.7661 12.3822 16.0885 12.7045 16.4861 12.7045V11.2645ZM18.7201 12.7045C19.1177 12.7045 19.4401 12.3822 19.4401 11.9845C19.4401 11.5869 19.1177 11.2645 18.7201 11.2645V12.7045ZM11.0401 7.7529H18.7201V6.3129H11.0401V7.7529ZM7.51398 6.3129H5.28006V7.7529H7.51398V6.3129ZM11.0401 17.6562H18.7201V16.2162H11.0401V17.6562ZM7.51398 16.2162H5.28006V17.6562H7.51398V16.2162ZM12.9601 11.2645H5.28006V12.7045H12.9601V11.2645ZM16.4861 12.7045H18.7201V11.2645H16.4861V12.7045Z"
        fill={strokeColor}
      />
    </Svg>
  );
};

export default FilterIcon;