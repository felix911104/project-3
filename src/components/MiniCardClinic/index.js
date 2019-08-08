import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '50vp',
    // backgroundColor: "darkgray",
    // backgroundImage: "./food.jpg",
    fontColor: "black",
    opacity: 0.7,
    hover: 1.0,
    marginBottom: "10px"
  },
//   card:hover {
//     opacity: 1.0,
//   },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">
          {/* put props here? Look at docs for material UI-react */}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>
        <h1>{props.name}</h1>
        <Button size="small">{props.location}</Button>
      </CardActions>
    </Card>
  );
}