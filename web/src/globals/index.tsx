import { createGlobalStyle } from "styled-components";
import { Colors, Fonts, MediaQuerys } from "../constants";

export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 60%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#root {
  height: 100vh;
}
body {
  background: ${Colors.ColorBackground};
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
}
body,
input,
button,
textarea {
  font: 500 1.6rem ${Fonts.Secondary};
  color: ${Colors.ColorTextBase};
}
.container {
  width: 90vw;
  max-width: 700px;
}
@media (min-width: ${MediaQuerys.Padronization_Web}) {
  :root {
    font-size: 62.5%;
  }
}
`;
