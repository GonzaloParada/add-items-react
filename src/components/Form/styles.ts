export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  input: {
    border: "none",
    borderBottom: "1px solid black",
    textAlign: "center",
    "&::focus": {
      outline: "none",
    },
  },
};
