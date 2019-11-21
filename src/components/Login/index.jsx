import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actionCreators from '../../actions/login';
import { utility } from '../../utils/common-func'
import { token } from '../../utils/Auth';
require('./style.scss')

class LoginScreen extends React.Component{
 constructor(props){
   super(props);
   this.state = {
      userName: '',
      password: '',
      isAuthUser: false
   }
   if(token.getToken()){
    this.props.history.push("/search");
  }
 }
  componentDidMount(){

  }
 componentDidUpdate(prevProps) {
  const { logged, errorLogin, peopleRes } = this.props;
  if (prevProps.loging && logged && !errorLogin) {
    if(peopleRes.length > 0){
      const _userObj = utility.getArrayObjectByKeySearch(peopleRes, 'name', this.state.userName);
      if(_userObj){
        const _fUserObj = utility.getArrayObjectByKeySearch(_userObj, 'birth_year', this.state.password);
        if(_fUserObj.length > 0){
          token.setToken(this.state.userName);
          this.props.history.push("/search");

          console.log('Successfully Login')
        }else{
          this.setState({ isAuthUser: true});
        }
      }else{
        this.setState({ isAuthUser: true});
      }
      console.log(_userObj);
    }else{
      this.setState({ isAuthUser: true});
    }
  }
}

 handleSignIn=(evt)=>{
   evt.preventDefault();
   this.setState({ isAuthUser: false});
   this.props.loginUser();
 }

 handleOnChange=(evt)=>{
   this.setState({ [evt.target.name]: evt.target.value, isAuthUser: false});
 }

 render(){
   const {userName, password, isAuthUser} = this.state;
   const btnLabel = this.props.loging ? 'Please Wait...' : 'Login';
    return (
      <div class="login-page">
        <div class="form">
          <h1>Login</h1>
          <form class="login-form">
            <input type="text" name="userName" onChange={this.handleOnChange} autoComplete="off" placeholder="Username" />
            <input type="password" name="password" onChange={this.handleOnChange} placeholder="Password" />
            <button disabled={(!userName && !password) || this.props.loging } onClick={this.handleSignIn}>{btnLabel}</button>
            {
              isAuthUser ? <p class="message">Invalid Username or password</p> : null
            }
          </form>
        </div>
      </div>
    )
 }
}

function mapStateToProps(state) {
  const { login } = state;
  return {
    loging: login.loging,
    peopleRes: login.peopleRes,
    errorLogin: login.errorLogin,
    logged: login.logged
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(_.assign({}, actionCreators, {}), dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
