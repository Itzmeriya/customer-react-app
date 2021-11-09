import React from 'react';
import './table.css';
const TableHeader = () => {
    return (
      <thead className="Table-header" > 
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Phone</th>
        </tr>
      </thead>
    )
  }

export default TableHeader;