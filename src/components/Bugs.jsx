import React, { Component } from "react";
//import StoreContext from "./../contexts/storeContexts";
import { connect } from "react-redux";
import { loadBugs } from "../store/bugs";
import { resolveBug, getUnResolvedBugs } from "./../store/bugs";

class Bugs extends Component {
  //static contextType = StoreContext;
  //   state = { bugs: [] };
  componentDidMount() {
    console.log(this.props);
    // const store = this.context;
    // this.unsubscribe = store.subscribe(() => {
    //   const bugsInStore = store.getState().entities.bugs.list;
    //   if (this.state.bugs !== bugsInStore) this.setState({ bugs: bugsInStore });
    // });
    // store.dispatch(loadBugs());
    this.props.loadBugs();
  }
  //   componentWillUnmount() {
  //     this.unsubscribe();
  //   }
  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => this.props.resolveBug(bug.id)}>
              Resolve
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => ({
  //bugs: state.entities.bugs.list,
  bugs: getUnResolvedBugs(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
