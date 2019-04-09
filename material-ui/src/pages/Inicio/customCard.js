import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedDialogDemo from './customModal';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    }
};
  
class CustomCard extends React.Component {
    state = {
        openModal : false,
    }

    render () {
        const { title, textCard, textModal,img, classes } = this.props;
        return (
            <React.Fragment>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="140"
                        image={img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            {textCard}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => this.setState({openModal : true})} size="small" variant="outlined" color="primary">
                            Ver mais
                        </Button>
                    </CardActions>
                </Card>
                <CustomizedDialogDemo 
                    open={this.state.openModal}
                    onClose={() => this.setState({openModal : false})}
                    title={title}
                    textContent={textModal}
                    img={img}
                />
            </React.Fragment>

        )
    }
}

export default withStyles(styles)(CustomCard);