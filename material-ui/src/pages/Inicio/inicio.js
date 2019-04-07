import React from 'react';
import CustomCard from './customCard'
import CustomizedDialogDemo from './customModal'

const Inicio = () => (
    <div>
        <CustomCard 
            title={"Projeto 1"}
            modalTitle={"Foto do jacaré massa"}
        />
        <CustomCard 
            title={"Projeto 2"}
        />
        <CustomCard 
            title={"Projeto 3"}
        />
    </div>
)

export default Inicio;