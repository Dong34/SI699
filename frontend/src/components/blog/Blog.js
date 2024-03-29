import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import FeaturedPost2 from './FeaturedPost2';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'SI699 Proj',
  description:
    "We help you to find out phishing urls! ",
  image: 'https://i.pinimg.com/originals/a0/3b/ba/a03bba9a25c4f7865e1dbee30716416f.jpg',
  imageText: 'main image description',
  //linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Find out whether it is a phishing website!',
    date: 'Database Last Updated: April, 2023',
    description:
      'Please copy your url and click "submit".',
    image: 'https://i.pinimg.com/originals/a0/3b/ba/a03bba9a25c4f7865e1dbee30716416f.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Add your result to improve our database',
    description:
      'Please enter the url and its label here',
    image: 'https://i.pinimg.com/originals/a0/3b/ba/a03bba9a25c4f7865e1dbee30716416f.jpg',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
              <FeaturedPost post={featuredPosts[0]} />
              <FeaturedPost2 post={featuredPosts[1]} />
          </Grid>
          
        </main>
      </Container>
    </ThemeProvider>
  );
}
