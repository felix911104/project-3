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
    Color: "#2ECCFA",
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
  }
});
export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="black" gutterBottom>
            Food
        </Typography>
        <Typography className={classes.pos} color="black">
        <a href = "http://www.udistrictfoodbank.org/"  target="_blank">University District Food Bank</a>
        <br></br>
        <a href = "https://westseattlefoodbank.org/"  target="_blank">West Seattle Food Bank</a>
        <br></br>
        <a href = "http://www.rvfb.org/"  target="_blank">Rainier Valley Food Bank</a>
        <br></br>
        <a href = "http://www.pmfb.org/"  target="_blank">Pike Market Food Bank</a>
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
        <Typography className={classes.title} color="black" gutterBottom>
            Clinics
        </Typography>
        <Typography className={classes.pos} color="black">
        <a href = "https://neighborcare.org/clinics/neighborcare-health-pike-place-market"  target="_blank">Neighbor Care Health</a>
        <br></br>
        <a href = "https://pschristianclinic.org/medicalclinic"  target="_blank">Puget Sound Christian Clinic</a>
        <br></br>
        <a href = "https://www.ywcaworks.org/programs/health-care-access"  target="_blank">YWCA</a>
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
        <Typography className={classes.title} color="black" gutterBottom>
            Shelters
        </Typography>
        <Typography className={classes.pos} color="black">
        <a href = "https://www.ugm.org/"  target="_blank">Seattle Union Gospel Mission</a>
        <br></br>
        <a href = "https://ccsww.org/get-help/shelter-homeless-services/sacred-heart-shelter/"  target="_blank">Sacred Heart Shelter</a>
        <br></br>
        <a href = "http://www.alohainn.org/"  target="_blank">Aloha Inn</a>
        <br></br>
        <a href = "http://www.jwcenter.org/"  target="_blank">Jubilee Women's Center</a>
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