import { useState } from 'react';

// Componente que permite agregar una categoria mediante un inputText
export const AddCategory = ({ onNewCategory }) => {
    // Esta constante se define para almacenar la categoria que se esta ingresando
    //El useState escribe por defecto: One Punch en la caja de texto
    const [inputValue, setInputValue] = useState('One Punch'); 

    const onInputChange = ({target}) =>{ // Esta funcion permite obtener lo que se escribe al presionar enter
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{ //Codigo de la peticion que se realiza al escribir y apretar enter
        event.preventDefault(); //Permite que el formulario no se vuelva a renderizar los valores por defecto
        if(inputValue.trim().length <= 1) return; //Valida que se ingrese al menos un caracter

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue(''); //Cada vez que se escribe algo en el input y 
                            //se presiona enter, queda vacio el inputText
    }

    return ( //Muestra el inputText en nuestra aplicacion
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={  onInputChange }
            />
        </form>
    )
}
