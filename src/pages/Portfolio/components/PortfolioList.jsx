import React from 'react';
import { List, ListItem, makeStyles, Paper } from '@material-ui/core';
import PortfolioDetail from './PortfolioDetail';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  paper: {
    minHeight: '300px',
    minWidth: '300px',
    margin: '10px'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const projects = [
  { title: 'First', id: 'first', techs: ['javascript', 'nodejs'] },
  { title: 'Second', id: 'second', techs: ['react', 'javascript'] },
  { title: 'Third', id: 'third', techs: ['angular', 'javascript'] },
  { title: 'Fourth', id: 'fourth', techs: ['react', 'javascript'] },
  { title: 'Fifth', id: 'fifth', techs: ['c#'] }
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
