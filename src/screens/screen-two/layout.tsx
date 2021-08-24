import React from 'react';
import NavPanel from '../../layouts/nav-panel';
import TwoColsLayoutThemeWrapper from '../../layouts/two-columns';
import ContentPanel from '../screen-two/content-panel/index';

export interface Props {}

const ScreenTwoLayout: React.FC<Props> = (props) => {
  return (
    <TwoColsLayoutThemeWrapper
      columnOne={<NavPanel />}
      columnTwo={<ContentPanel />}
    />
  );
};

export default ScreenTwoLayout;
