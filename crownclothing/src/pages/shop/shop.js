import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shpo.data";

class shopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherColllectionProps }) => (
          <CollectionPreview key={id} {...otherColllectionProps} />
        ))}
      </div>
    );
  }
}

export default shopPage;
