import React from 'react';
import s from './News.module.css';

const News = (props) => {

  let newsElements = props.newsPosts.map(p => {
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
};

export default News;