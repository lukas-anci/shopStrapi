import Blog from '../components/Sections/Blog/Blog';
import Layout from './../components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';

import SingleBlogPage from './SingleBlogPage';

export default function BlogPage() {
  return (
    <Layout page="blog">
      <Switch>
        <Route path="/blog/:blogId">
          <SingleBlogPage />
        </Route>
        <Route path="/blog">
          <Blog kind="free" />
          <Blog kind="paid" />
        </Route>
      </Switch>
    </Layout>
  );
}
