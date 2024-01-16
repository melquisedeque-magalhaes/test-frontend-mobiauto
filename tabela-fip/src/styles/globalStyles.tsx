import { Global, css } from '@emotion/react'

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          font-family: 'Roboto', sans-serif;
        }

        ::-webkit-scrollbar {
          background-color: #fff;
          width: 16px;
        }

        ::-webkit-scrollbar-track {
          background-color: #fff;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #babac0;
          border-radius: 16px;
          border: 4px solid #fff;
        }

        ::-webkit-scrollbar-button {
          display: none;
        }
      `}
    />
  )
}
