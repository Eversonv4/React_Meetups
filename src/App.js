import { Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from "./pages";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup" exact={true}>
          <NewMeetupPage />
        </Route>

        <Route path="/favorites" exact={true}>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
