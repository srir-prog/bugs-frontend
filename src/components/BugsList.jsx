import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnResolvedBugs } from "../store/bugs";
import { resolveBug } from "./../store/bugs";
const BugList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnResolvedBugs);
  //const bugs = useSelector((state) => state.entities.bugs.list);
  useEffect(() => {
    dispatch(loadBugs());
  }, [dispatch]);
  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
        </li>
      ))}
    </ul>
  );
};

export default BugList;
