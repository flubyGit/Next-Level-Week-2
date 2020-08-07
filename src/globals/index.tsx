import { createGlobalStyle } from "styled-components";

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
  background: var(--color-background);
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
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}
.container {
  width: 90vw;
  max-width: 700px;
}
@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;
