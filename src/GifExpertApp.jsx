import { useState } from 'react';
import {AddCategory, GifGrid} from './components';


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Love']);

    const onAddCategory = (newCategory) => {


        if(categories. includes(newCategory) ) return;
       
        setCategories([newCategory, ...categories]);
    }

    return (

    <>

       <h1>GifExpertApp</h1> 


        <AddCategory
            onNewCategoriy={ onAddCategory}           
        />

        { 
            categories.map( (category) =>  <GifGrid category={category} key={category} />)
        }


    </>
    
  )
}

export default GifExpertApp