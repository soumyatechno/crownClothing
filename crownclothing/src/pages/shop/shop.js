import React from "react";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../collection/collection.js";
import { Route } from "react-router-dom";
const shopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default shopPage;
