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
    opacity: 0.9,
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
        <Typography className={classes.pos} color="black">
         While Sheltr itself does not accept donations, there are plenty of local Seattle Charities, Food Banks, ect. that do accept and help local people.  Here are just a few we like.
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}