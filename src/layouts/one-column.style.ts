import { ITheme } from "../app-theme";
const { createUseStyles } = require("react-jss");


export default createUseStyles((theme: ITheme) => ({
  mainLayout: {
    minWidth:"1920px",
    minHeight: "1080px",
    fontSize: "25pt",
    backgroundColor: theme.palette.shade1,
  }
})
)