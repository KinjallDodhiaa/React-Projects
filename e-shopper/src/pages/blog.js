import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import BlogList from '../components/blogs/blogList';
import BlogSingle from '../components/blogs/blogSingle';

const Blog = () => {
      let { path } = useRouteMatch();
      console.log(path);

      return (
        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={path + "/blogList"}>
            <BlogList />
          </Route>
          <Route path={path + "/blogSingle"}>
            <BlogSingle />
          </Route>
        </Switch>
      );

};

export default Blog;