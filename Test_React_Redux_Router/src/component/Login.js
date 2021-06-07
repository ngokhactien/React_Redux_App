import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {

	// const handleOnChange = event => {
	// 	const { name, value } = event.target;
	// 	setInputValues({ ...inputValues, [name]: value });
	//   };
	const [inputValues, setInputValues] = useState({
		txtUsername: '', txtPassword: ''
	});

	const onChange = (event) => {
		var target = event.target;
		var name  = target.name ;
		var value = target.type === 'checkbox' ? target.checked : target.value ;
		setInputValues({...inputValues , [name]:value})
	};

	var onLogin = (e) =>{
		e.preventDefault();
		if(inputValues.txtUsername ==='khactien' && inputValues.txtPassword === 'khactien'){
			localStorage.setItem('user' , JSON.stringify({
				username : inputValues.txtUsername,
				password : inputValues.txtPassword
			}));
			alert('Đăng nhập thành công');
		};
		if(inputValues.txtUsername !=='khactien' && inputValues.txtPassword !== 'khactien'){
			alert('UserName or Password không đúng');
		}
	};
		const loggedInUser = localStorage.getItem('user') ;
		if(loggedInUser !== null){
			var {location} = this.props ;
			return( <Redirect to={
					{
						pathname : '/products',
						state : {
							from : location
						}
					}
				}/>
			)
		};
		console.log(location)
		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				
				<form onSubmit={onLogin } >
					<legend>Đăng nhập</legend>
				
					<div className="form-group">
						<label>UserName :</label>
						<input 
							type="text" 
							className="form-control" 
							name="txtUsername"
							value= {inputValues.txtUsername}
							onChange={ onChange }
						/>
					</div>

					<div className="form-group">
						<label>Password :</label>
						<input 
							type="password" 
							className="form-control" 
							name="txtPassword"
							value={inputValues.txtPassword}
							onChange={ onChange }
						/>
					</div>
					
					<button type="submit" className="btn btn-primary">Đăng nhập</button>
				</form>

				</div>
			</div>
		);
};
export default Login ;