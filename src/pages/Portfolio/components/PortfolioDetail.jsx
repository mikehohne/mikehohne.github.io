import React from 'react';
import { Avatar, Paper, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const PortfolioDetail = props => {
  const { project, handleClick } = props;

  function onSelect() {
    handleClick(project.id);
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link onClick={onSelect} className={classes.link}>
        <Typography variant='h6'>{project.title}</Typography>
      </Link>
      <h1>H</h1>
    </div>
  );
};

export default PortfolioDetail;
