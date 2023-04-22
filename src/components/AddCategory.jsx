import { useState } from 'react';

export const AddCategory = ({onNewCategoriy}) => {


    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
      setInputValue(target.value)
    }

    const onSubmit = (e) => {
      e.preventDefault();

      if(inputValue.trim().length <=  1 ) return;
      // setCategories(categories => [ inputValue, ...categories]);

      
      onNewCategoriy(inputValue.trim());
      setInputValue('');
    }

  return (
    
    <form onSubmit={ onSubmit}>

      <input
          type="text"
          placeholder="Buscar Gifs"
          onChange={onInputChange}
          value={inputValue}
          id="inputSearch"
      />

    </form>
  


  )


}

