import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addAction,minusAction,addAsync} from './index.redux.js';
@connect((state)=>({num:state.counter}),{addAction,minusAction,addAsync})
class App extends Component {
  render() {
    return (
      <div>
          <div>
            现在有{this.props.num}个小朋友
          </div>
          <button onClick={this.props.addAction}>来了个小朋友</button>
          <button onClick={this.props.minusAction}>走了个小朋友</button>
          <button onClick={this.props.addAsync}>等一会来</button>
      </div>
    );
  }
}
// function mapStateToProps(state){
//   return {num:state}  
// }
// const actionCreators = {addAction,minusAction,addAsync};
export default App;
