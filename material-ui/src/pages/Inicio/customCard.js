import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedDialogDemo from './customModal';

class CustomCard extends React.Component {
    state = {
        openModal : false,
    }

    render () {
        const { title, modalTitle } = this.props;
        return (
            <React.Fragment>
                <Card>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => this.setState({openModal : true})} size="small" color="primary">
                            Ver mais
                        </Button>
                    </CardActions>
                </Card>
                <CustomizedDialogDemo 
                    open={this.state.openModal}
                    onClose={() => this.setState({openModal : false})}
                    title={modalTitle}
                    textContent={"rebeca e lucasxcxzcddfdfddasdasdasdasdasd"}
                />
            </React.Fragment>

        )
    }
}

export default CustomCard;