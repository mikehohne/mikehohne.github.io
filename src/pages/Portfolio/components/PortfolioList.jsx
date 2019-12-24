import React from 'react';
import { List, ListItem, makeStyles, Paper } from '@material-ui/core';
import PortfolioDetail from './PortfolioDetail';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px'
  },
  paper: {
    maxHeight: '200px',
    minWidth: '200px'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const projects = [
  { title: 'First', id: 'first' },
  { title: 'Second', id: 'second' },
  { title: 'Third', id: 'third' },
  { title: 'Fourth', id: 'fourth' },
  { title: 'Fifth', id: 'fifth' }
];

const PortfolioList = props => {
  const classes = useStyles();

  function navigate(id) {
    props.history.push(`/portfolio/${id}`, {
      project: projects.find(proj => proj.id === id)
    });
  }
  return (
    <List className={classes.root}>
      {projects.map(project => (
        <Paper key={project.title} className={classes.paper}>
          <ListItem className={classes.listItem}>
            <PortfolioDetail handleClick={navigate} project={project} />
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default PortfolioList;
