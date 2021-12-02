import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'components/Container';

const HomeView = lazy(() => import('./views/HomeView'));
const HeroView = lazy(() => import('./views/HeroView'));

export default function App() {
  return (
    <Container>
      <Switch>
        <Suspense fallback={''}>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route path="/heroes/:id">
            <HeroView />
          </Route>
        </Suspense>
      </Switch>
    </Container>
  );
}
