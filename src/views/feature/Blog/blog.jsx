import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BlogView from '../BlogView';
import './style.scss'
import { Link } from 'react-router-dom';
Blog.propTypes = {
    blog: PropTypes.object,
};



export default function Blog({blog}) {
  function getHost(){
    return '/blog/'+blog.id;
  }
const myLink=props=><Link to={getHost()} {...props} />

  return (
    
    <Card sx={{ minWidth: 250 }} className='blog'>
      <CardContent>
       
        <Typography variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small" component={myLink}>View </Button>
      </CardActions>
    </Card>
  );
}

