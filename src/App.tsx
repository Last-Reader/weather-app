import { Layout } from '@components/Layout/';
import MainPage from './pages/MainPage';
import { GlobalStyle } from '@src/styles/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <MainPage></MainPage>
    </Layout>
    </>
  );
}

export default App;