import { ITheme } from "../app-theme";

const { createUseStyles } = require("react-jss");

export default createUseStyles((theme: ITheme) => ({
  threeColumns: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "100vh",
  },
  firstColumn: {
    minWidth:"300px",
    backgroundColor: theme.palette.shade1,
    display: "inline-block",
    color: theme.palette.shade4,
  },
  secondColumn: {
    minWidth:"650px",
    color: theme.white.accent1,
    backgroundColor: theme.palette.shade2,
    padding:"25px 45px 25px 45px",
    marginRight: "auto",
  },
  thirdColumn: {
    minWidth:"650px",
    color: theme.black.accent1,
    backgroundColor: theme.palette.shade6,
    padding:"25px 45px 25px 45px",
    marginRight: "auto",
  },
}));
