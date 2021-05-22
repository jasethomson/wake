import React from 'react';

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.cols.map(col => {
            return <th className={`td-${col.name}`} key={col.name}>{col.header}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {props.data ? rows(props) : <div>No data</div>}
      </tbody>
    </table>
  );
}

export default Table;

const rows = props => {
  let count = 0;
  const rows = [];
  props.data.map(dataPiece => {
    rows.push(
      <tr key={dataPiece[props.id]}>
        {props.cols.map(col => {
          if (col.name === "count") {
            return <td className="td-count" key={++count}>{count}</td>;
          } else if (col.name === "delete") {
            return <td className="td-icon" key={`${count}-delete`}><div onClick={() => this.props.delClick(dataPiece[props.id])}><i className="fas fa-minus-circle fa-lg"></i></div></td>;
          } else {
            return <td key={dataPiece[col.name]}>{dataPiece[col.name]}</td>;
          }
        })}
      </tr>
    );
  });
  return rows;
}
