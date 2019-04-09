import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';

class Contato extends React.Component{
    
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
                                type="email"
                                id="email"
                                label="Email"
                                margin="normal"
                                autoComplete="email"
                                placeholder="nome@exemplo.com"
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

            
          </div>
        );
        
    }
   

}
    

export default Contato;

 {/* <TextField
                                required
                                fullWidth
                                id="Nome"
                                label="Nome"
                                margin="normal"
                                name="nome"
                            /> */}

 {/* <TextField
                                required
                                fullWidth
                                id="Mensagem"
                                label="Mensagem"
                                multiline
                                rowsMax="4"
                                // value={this.state.multiline}
                                margin="normal"
                            /> */}