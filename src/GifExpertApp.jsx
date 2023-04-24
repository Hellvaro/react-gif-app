
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory) ) return; //Valida que la categoria no se repita
        // Agregar una categoria
        setCategories([newCategory, ...categories]) //Agrega una categoria que se escribe en el input
        // setCategories(cat => [...cat,'Blind Guardian'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* Esto muestra el componente del input en la aplicacion : */}
           <AddCategory
                onNewCategory = { (value) => onAddCategory(value)}
            />

           {/* Muestra las categorias : */}
            {   categories.map( (category) =>  (
                    <GifGrid 
                        key={category}
                        category= {category}
                    />
                )) 
            }
        </>
    )
}
