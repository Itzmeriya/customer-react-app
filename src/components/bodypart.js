import React from 'react';
import './table.css';
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.location}</td>
          <td>{row.phone}</td>
          <td>
              <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody className="Table-body">{rows}</tbody>
  }

  export default TableBody;