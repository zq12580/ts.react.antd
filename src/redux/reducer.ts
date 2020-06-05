import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from "../pages/login/action";

const allReducers = (history: any) => combineReducers({
  router: connectRouter(history),// 添加路由reducer通过传递history给connectRouter
  loginData: loginReducer
});
export default allReducers;