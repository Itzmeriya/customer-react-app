import React from 'react';
import './table.css';
import TableHeader from './headerpart';
import TableBody from './bodypart';
const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table className="Table">
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
    
  }
  export default Table;