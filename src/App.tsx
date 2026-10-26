import { Layout } from '@components/Layout/';
import MainPage from './pages/MainPage';
import { GlobalStyle } from '@src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout>
          <MainPage isDark={isDark} onToggle={setIsDark}></MainPage>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
