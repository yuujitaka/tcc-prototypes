import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import SimpleSnackbar from './snackbar';
import green from '@material-ui/core/colors/green';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class Contato extends React.Component{

    state = {
        open: false,
        nome: '',
        email: '',
        mensagem: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.reportValidity() == false){
            console.log("tá errado");
        } else {
            this.setState({open: true}); 
            this.resetForm();

        }
           
    }

    handleClose = () => {
        this.setState({open: false}); 
    }

    handleChange = name => event => {
        console.log(event.target.value);
        this.setState({ [name]: event.target.value });
    };

    resetForm = () =>{
        this.setState({nome: '', email: '', mensagem: ''});
    }

    render(){
        return (
            <div>
                <Typography variant="h5" gutterBottom>
                    Entre em contato
                </Typography>

                <Grid container spacing={16}>
                    <Grid item md={6}>
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                           
                        <TextField
                            required
                            fullWidth
                            id="Nome"
                            label="Nome"
                            margin="normal"
                            onChange={this.handleChange('nome')}
                            value={this.state.nome}
                         />

                        <TextField
                            required
                            fullWidth
                            type="email"
                            id="email"
                            label="Email"
                            margin="normal"
                            autoComplete="email"
                            placeholder="nome@exemplo.com"
                            onChange={this.handleChange('email')}
                            value={this.state.email}
                        />

                        <TextField
                            required
                            fullWidth
                            id="mensagem"
                            label="Mensagem"
                            multiline
                            rowsMax="4"
                            // value={this.state.multiline}
                            margin="normal"
                            onChange={this.handleChange('mensagem')}
                            value={this.state.mensagem}
                        />

                            <Button variant="contained" color="primary" type="submit" >
                                Enviar
                            </Button>
                        </form>   
                    </Grid>

                    <Grid item md={6}>
                        Social
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Grid>
                </Grid>

            <SimpleSnackbar open={this.state.open} duration={6000} text={'Mensagem enviada com sucesso'} handleClose={this.handleClose}
            />
            
          </div>
        );
        
    }
   

}
    

export default Contato;

 

 