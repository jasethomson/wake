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
          {this.props.songs ?
            this.props.songs.map(song => {
              return (
                <tr key={count}>
                  <td className="td-#">{++count}</td>
                  <td className="td-title">{song.title}</td>
                  <td className="td-artist">{song.artist}</td>
                  <td className="td-dateAdded">{song.dateAdded}</td>
                </tr>
              );
            }) : null}
        </tbody>
      </table>
    );
  }
}
Table.contextType = AppContext;
