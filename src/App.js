import React from "react";
import { Route ,Switch} from "react-router";
import AllMeetups from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import Test from "./components/test/Test";
function App() {
  return (
   <Layout>
     {/* <h1>My Todos</h1>
    <Todo text="React Js" />

    <Todo text="React Course"/>

    <Todo text="React Js Expert"/> */}
    
  <Switch>
    <Route path='/' exact>
      <AllMeetups />
      {/* <Test></Test> */}
    </Route>

    <Route path='/new-mmetup'>
      <NewMeetupPage />
    </Route>

    <Route path='/favorites'>
      <FavoritesPage />
    </Route>
    </Switch>
   </Layout>
  );
}

export default App;
