import React from 'react';
import NavPanel from '../../layouts/nav-panel';
import ThreeColsLayoutThemeWrapper from '../../layouts/three-columns';
import ColumnThree from './content-panel/column-three';
import ColumnTwo from './content-panel/column-two';

export interface Props {}

const ScreenThreeLayout: React.FC<Props> = (props) => {
  return (
    <ThreeColsLayoutThemeWrapper
      columnOne={<NavPanel />}
      columnTwo={<ColumnTwo />}
      columnThree={<ColumnThree />}
    />
  );
};

export default ScreenThreeLayout;
