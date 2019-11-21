import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width:275,
    minWidth: 275,
    backgroundColor: '#333'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: '#ffe300',
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    padding: "10px 15px",
    marginBottom: "-1px",
    backgroundColor: "#32383e",
    border: "1px solid rgba(0,0,0,.6)",
    color: '#fff',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  }
});

export default function ItemCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.planet.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn} size="small">Info</Button>
      </CardActions>
    </Card>
  );
}
