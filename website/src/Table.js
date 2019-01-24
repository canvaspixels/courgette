import React from 'react';
import './Table.scss';

const Table = ({ children }) => (
  <div className="table__wrap">
    <table className="table">
      { children }
    </table>
  </div>
);

export default Table;
