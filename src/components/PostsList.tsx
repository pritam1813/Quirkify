import React from 'react';
import { Box, CardMedia } from '@mui/material';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import ThemeColors from '../assets/theme';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Post } from './types';

interface Props {
  posts: Post[];
}

class PostsList extends React.Component<Props> {
  render() {
    const { posts } = this.props;

    // const options = {
    //   hour: 'numeric' as const,
    //   minute: 'numeric' as const,
    //   hour12: true as const,
    //   day: 'numeric' as const,
    //   month: 'long' as const,
    //   year: 'numeric' as const,
    // };

    return (
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: ThemeColors.pink,
          padding: '2% 0',
        }}
        className="posts-list"
      >
        {posts.map((post) => (
          <Card
            sx={{
              maxWidth: '60%',
              backgroundColor: ThemeColors.light,
              margin: '0 auto 2%',
            }}
            className="post-wrapper"
            key={post.id}
          >
            <CardHeader
              className="post-header"
              avatar={
                <Avatar sx={{ bgcolor: ThemeColors.green }} alt="User-Avatar">
                  T
                </Avatar>
              }
              title={post.name}
              // subheader={new Intl.DateTimeFormat('en-US', options).format(
              //   new Date(post.date)
              // )}
            ></CardHeader>
            <CardContent className="post-content" sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="40%"
                image="https://images.unsplash.com/photo-1669940812749-0a0fa4b92ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="
                The Genesis X Convertible by the poolside"
              />
              <Typography variant="subtitle1">
                Photo by{' '}
                <a href="https://unsplash.com/@hyundaimotorgroup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Hyundai Motor Group
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/photos/LMFmiQS87i4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: ThemeColors.green, fontSize: '1.5rem' }}
                // dangerouslySetInnerHTML={{ __html: post.body }}
              >
                {post.content}
              </Typography>
            </CardContent>

            <CardActions
              disableSpacing
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              className="post-actions"
            >
              <IconButton aria-label="post-like">
                <FavoriteBorderIcon />
                {/* <span className="post-likes-length">{post.note_count}</span> */}
                <span className="post-likes-length">2</span>
              </IconButton>
              <IconButton>
                <CommentIcon />
                <span>1</span>
              </IconButton>

              <Container className="spacer" sx={{ flexGrow: 1 }}></Container>

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardContent>
              <TextField
                fullWidth
                id="standard-basic"
                label="Start Typing A Comment"
                variant="outlined"
                className="post-comment-box"
              />

              <Container className="post-comments-list" sx={{ marginTop: 2 }}>
                <Container className="post-comments-item">
                  <div className="post-comment-header">
                    <Typography variant="h5" className="post-comment-author">
                      John Doe
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className="post-comment-time"
                    >
                      Few moments ago
                    </Typography>
                  </div>
                  <Container>
                    <Typography variant="h5" className="post-comment-content">
                      Random Comment
                      <IconButton className="post-comment-likes">
                        <FavoriteBorderIcon /> <span>2</span>
                      </IconButton>
                    </Typography>
                  </Container>
                </Container>
              </Container>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }
}

export default PostsList;
