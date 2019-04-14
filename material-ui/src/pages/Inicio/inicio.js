import React from 'react';
import CustomCard from './customCard'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const Inicio = () => (
    <div>
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Olá, Sou Designer de Interfaces
            </Typography>

            <Typography variant="subtitle1" align="center" gutterBottom>
                Estou no mercado há 3 anos! Explore meu portfólio para conhecer mais
            </Typography>
        </div>
       

        <Typography variant="h5" gutterBottom>
            Projetos
        </Typography>

        <Grid container spacing={16}>
            <Grid item sm={12} md={6} lg={3}>
                <CustomCard 
                    title={"Projeto 1"}
                    textCard={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                    textModal={"Some quick example text to build on the card title and make up the bulk of the modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero."}
                    alt={"imagem placeholder do projeto 1"}
                />
            </Grid>

            <Grid item sm={12} md={6} lg={3}>
                <CustomCard 
                    title={"Projeto 2"}
                    textCard={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                    textModal={"Some quick example text to build on the card title and make up the bulk of the modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero."}
                    alt={"imagem placeholder do projeto 2"}
                />
            </Grid>
            
            <Grid item sm={12} md={6} lg={3}>
                <CustomCard 
                    title={"Projeto 3"}
                    textCard={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                    textModal={"Some quick example text to build on the card title and make up the bulk of the modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero."}
                    alt={"imagem placeholder do projeto 3"}
                />
            </Grid>

            <Grid item sm={12} md={6} lg={3}>
                <CustomCard 
                    title={"Projeto 4"}
                    textCard={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                    textModal={"Some quick example text to build on the card title and make up the bulk of the modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero."}
                    alt={"imagem placeholder do projeto 4"}
                />
            </Grid>
            
        </Grid>
    </div>
    
        
        
)

export default Inicio;