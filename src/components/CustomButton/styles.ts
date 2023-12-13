import { colors } from "../../commons/colors";

export const styles = (color?: string, bg?: string) => {
  return {
    border: "none",
    outline: "none",
    color: color ?? colors.customWhite,
    backgroundColor: bg ?? colors.customGreen,
    borderRadius: "30px",
    height: "40px",
    padding: "0px 20px",
    boxShadow: "0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  };
};
