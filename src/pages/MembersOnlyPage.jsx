// tik paid member straipsniai
// prideti psl i menu
// sukurti ji taip kad jis parsisiustu mokamus straipsniuss
import Blog from '../components/Sections/Blog/Blog';
import Layout from './../components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';

import SingleBlogPage from './SingleBlogPage';

export default function MembersOnlyPage() {
  return (
    <Layout page="membersOnly">
      <Switch>
        <Route path="/membersonlypage/:blogId">
          <SingleBlogPage kind="paid" membersOnly />
        </Route>
        <Route path="/membersonlypage">
          <Blog kind="paid" membersOnlyBackFlag />
        </Route>
      </Switch>
    </Layout>
  );
}
