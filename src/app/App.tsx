import { Container } from '@/shared/ui/Container/Container.tsx';
import { Webrapper } from '@/shared/ui/Webrapper/Webrapper.tsx';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import AppRoutes from './router/AppRoutes.tsx';

function App() {
  return (
    <div className={'app'}>
      <Header />
      <Container>
        <Webrapper>
          <AppRoutes />
        </Webrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
