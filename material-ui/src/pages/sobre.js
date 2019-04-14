import React from 'react';
import Typography from '@material-ui/core/Typography';

const Sobre = () => (
    <div>
        <Typography variant="h5" gutterBottom>
            Sobre Mim
        </Typography>

        <img src={require('../img/sem_foto_pessoa.png')} alt="foto placeholder" width="25%" height="auto" style={{float:'left', marginRight: '10px'}}></img>

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur consectetur. Nullam tempus purus libero, ac tincidunt dui pretium vitae. Morbi commodo feugiat feugiat. Morbi in massa scelerisque, ullamcorper velit vitae, porta mauris. Integer sit amet sollicitudin tortor, maximus ultrices dui. Vestibulum sem turpis, vestibulum sit amet ullamcorper in, ultrices sed dui. Sed et ornare libero.
        </Typography>
    </div>
);

export default Sobre;