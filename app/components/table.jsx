import React from 'react';
import AppContext from '../context';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Table"
    }
  }

  render() {
    let count = 0;
    return (
      <table>
        <thead>
          <tr>
            {this.props.cols.map(col => {
              return <th key={col.name}>{col.header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.data ?
            this.props.data.map(dataPiece => {
              return (
                <tr key={dataPiece[this.props.id]}>
                  {this.props.cols.map(col => {
                    if (col.name === "count") {
                      return <td key={++count}>{count}</td>;
                    } else if (col.name === "delete") {
                      return <td key={`${count}-delete`}><div onClick={() => this.props.delClick(dataPiece[this.props.id])}><i className="far fa-minus-square"></i></div></td>;
                    } else {
                      return <td key={dataPiece[col.name]}>{dataPiece[col.name]}</td>;
                    }
                  })}
                </tr>
              );
            }) : null}
        </tbody>
      </table>
    );
  }
}
Table.contextType = AppContext;
