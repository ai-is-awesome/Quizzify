const myTheme = {
  colors: {
    primaryColor: "#116A7B",
    2: "#116A7B",
    3: "#55A0AF",
    4: "#55A0AF",
    5: "#A0CED7",
    6: "#BDDEE4",
  },
  white: {
    bgColorPrimary: "#116A7B",
    bgColorCard: "gray.100",
    textColorMain: "white",
  },
  blue: {},
};

export function getThemeObject(themeName) {
  return myTheme[themeName];
}

export default myTheme;
