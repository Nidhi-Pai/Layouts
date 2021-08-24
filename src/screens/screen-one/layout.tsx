import React from 'react';
import OneColLayoutThemeWrapper from '../../layouts/one-column';
import ContentPanel from '../screen-one/content-panel/index';

export interface Props {}

const ScreenOneLayout: React.FC<Props> = (props) => {
  return <OneColLayoutThemeWrapper contentPanel={<ContentPanel />} />;
};

export default ScreenOneLayout;
