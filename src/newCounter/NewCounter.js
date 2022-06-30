import { configureStore } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 포맷으로 전달해주는 역할
const increase = () => {
  return {
    type: INCREASE,
  };
};

const decrease = () => {
  return {
    type: DECREASE,
  };
};

const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text,
  };
};

const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item,
  };
};

// dispatch 실행 시
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer: reducer });

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("kimson"));
store.dispatch(addToList({ id: 1, text: "good" }));

const NewCounter = () => {
  return <div>test11</div>;
};

// export default NewCounter;
