import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const StyledGlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.white};
}
body, html, #root {
    height: 100%;
}

#root {
    margin: auto;
    display: flex;
    flex-direction: column;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
}

.css-1s0hp0k-MuiDataGrid-columnHeadersInner{
    background-color: ${colors.white};
}

`
export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
