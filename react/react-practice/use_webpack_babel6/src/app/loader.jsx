import React from 'react';
import ReactDOM from 'react-dom';

import Comment from './components/Comment.jsx';
import CommentBox from './components/CommentBox.jsx';
import CommentForm from './components/CommentForm.jsx';
import CommentList from './components/CommentList.jsx';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);

