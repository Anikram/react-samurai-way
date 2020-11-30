import React from 'react';
import s from './News.module.css';
import StoreContext from "../../StoreContext";

const News = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let newsElements = store.getState().newsReducer.newsPosts.map(p => {
          return (
            <div className={s.newsPost}>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          )
        });

        return (
          <div className={`${s.newsPostsContent} tile`}>
            <h1>News</h1>
            {newsElements}
          </div>
        )
      }
      }
    </StoreContext.Consumer>
  )
};

export default News;