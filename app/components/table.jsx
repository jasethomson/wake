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
              return <th className={`td-${col.name}`} key={col.name}>{col.header}</th>
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
                      return <td className="td-count" key={++count}>{count}</td>;
                    } else if (col.name === "delete") {
                      return <td className="td-icon" key={`${count}-delete`}><div onClick={() => this.props.delClick(dataPiece[this.props.id])}><i className="fas fa-minus-circle"></i></div></td>;
                    } else {
                      return <td key={dataPiece[col.name]}>{dataPiece[col.name]}</td>;
                    }
                  })}
                </tr>
              );
            }) : <div>No data</div>}
        </tbody>
      </table>
    );
  }
}
Table.contextType = AppContext;
