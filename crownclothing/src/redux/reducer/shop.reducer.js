import SHOP_DATA from "../../pages/shop/shpo.data";

const INITIAL__STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL__STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
