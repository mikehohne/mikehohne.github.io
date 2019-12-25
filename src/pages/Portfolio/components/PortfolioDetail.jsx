import React from 'react';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none'
    },
    padding: '4px'
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
      <div>
        {project.techs.map((tech, i) => (
          <Link
            key={tech + i}
            onClick={() =>
              window.open(`https://google.com/search?q=${tech}`, '_blank')
            }
            className={classes.link}
          >
            {tech}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetail;
