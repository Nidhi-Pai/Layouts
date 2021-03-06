import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../app-theme';
import useStyles from './three-columns.styles';

export interface Props {
  columnOne: React.ReactElement;
  columnTwo: React.ReactElement;
  columnThree: React.ReactElement;
}

const ThreeColsLayoutThemeWrapper: React.FC<Props> = (props) => (
  <ThemeProvider theme={theme}>
    <ThreeColsLayout {...props} />
  </ThemeProvider>
);

const ThreeColsLayout: React.FC<Props> = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.threeColumns}>
      <div className={styles.firstColumn}>{props.columnOne} </div>
      <div className={styles.secondColumn}>{props.columnTwo}</div>
      <div className={styles.thirdColumn}>{props.columnThree}</div>
    </div>
  );
};

export default ThreeColsLayoutThemeWrapper;
