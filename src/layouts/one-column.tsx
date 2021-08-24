import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../app-theme';
import useStyles from './one-column.style';

export interface Props {
  contentPanel: React.ReactElement;
}

const OneColLayoutThemeWrapper: React.FC<Props> = (props) => (
  <ThemeProvider theme={theme}>
    <OneColLayout {...props} />
  </ThemeProvider>
);

const OneColLayout: React.FC<Props> = (props) => {
  const styles = useStyles();

  return <div className={styles.mainLayout}>{props.contentPanel}</div>;
};

export default OneColLayoutThemeWrapper;
