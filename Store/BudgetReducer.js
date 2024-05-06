import { ADD_BUDGET_ITEM } from './BudgetActions';

const initialState = {
  budgetEntries: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET_ITEM:
      return {
        ...state,
        budgetEntries: [...state.budgetEntries, action.payload],
      };
    default:
      return state;
  }
};

export default budgetReducer;
