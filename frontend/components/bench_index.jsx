import React from 'react';
export default class BenchIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestBenches();
  }

  render(){
    return(
      <div>
        <h1>heyo these are the benches</h1>
        <ul>
          {this.props.benches.map(bench => (
            <li key={bench.id}>{`${bench.id}: ${bench.description}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
