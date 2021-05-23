import React from 'react';

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.cols.map(col => {
            return <th className={`td-${col.name}`} key={`th-${col.name}`}>{col.header}</th>
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
          if (col.name === "count") count++;
          return col.iconCls ? icons(col, props, count, dataPiece) : <td key={dataPiece[col.name]}>{dataPiece[col.name]}</td>;
        })}
      </tr>
    );
  });
  return rows;
}

const icons = (col, props, count, dataPiece) => {
  return col.name === "count" ?
    <td className="td-count" key={count}>{count}</td> :
    <td className="td-icon" key={`${count}-${col.name}`}><div onClick={() => col.iconFunc(dataPiece[props.id])}><i className={col.iconCls}></i></div></td>;
}
