import { ITheme } from "../app-theme";

const { createUseStyles } = require("react-jss");

export default createUseStyles((theme: ITheme) => ({
  twoColumns: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "100vh",
  },
  firstColumn: {
    minWidth:"300px",
    minHeight: "1080px",
    backgroundColor: theme.palette.shade4,
    display: "inline-block",
    color: theme.white.accent1,
  },
  secondColumn: {
    width:"1620px",
    color: theme.palette.shade4,
    backgroundColor: theme.white.accent1,
    padding:"25px 45px 25px 45px",
    marginRight: "auto",
  },
}));
