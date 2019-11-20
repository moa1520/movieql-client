import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        color: inherit;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #ecf0f1;
    }
    main {
      width: 80%;
      margin: 0 auto;
      padding: 20px;
    }
`;

export default globalStyles;
