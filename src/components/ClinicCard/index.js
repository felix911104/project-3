import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MiniCard from '../MiniCard/index';
import { minHeight } from '@material-ui/system';
import Background from '../ClinicCard/clinic.jpg'
const useStyles = makeStyles(theme => ({
    card: {
        textAlign: "center",
        backgroundColor: "#1d1d1d",
        color: "#9d9d9d",
        backgroundImage: `url(${Background})`,

    },
    media: {
        // height: 0,
        paddingTop: '56.25%', // 16:9
        color: "white",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: "white"
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardwrapper: {
        width: '80vp',
        height: '20vp',
        margin: '20px'
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <div className={classes.cardwrapper}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            Food
          </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader=""
                />
                {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                /> */}
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" color="#9d9d9d">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                   
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph></Typography>
                        <Typography paragraph>
                        <MiniCard />
          </Typography>
                        <Typography paragraph>
                        <MiniCard />
          </Typography>
                        <Typography paragraph>
                        <MiniCard />
          </Typography>
                        <Typography>
          </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
