import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormVal } from './FormVal'

import './Login.css'
export const Login = (props) => {
	const { Detail, handleChnage,handlesubmit} = FormVal()
    
	



	return (
		<div>
			<h1>Signup!<img src="https://cdn-icons-png.flaticon.com/128/295/295128.png" alt="" /></h1>
			<div class="login-wrap">
				
					{/* <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label> */}
					{/* <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label> */}
					
						{/* <div class="sign-in-htm">
							<div class="group">
								<label for="user" class="label">Username</label>
								<input id="user" type="text" class="input" />
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label>
								<input id="pass" type="password" class="input" data-type="password" />
							</div>
							<div class="group">
								<input id="check" type="checkbox" class="check" checked />
								<label for="check"><span class="icon"></span> Keep me Signed in</label>
							</div>
							<div class="group">
								<input type="submit" class="button" value="Sign In" />
							</div>
							<div class="hr"></div>
							<div class="foot-lnk">
								<a href="#forgot">Forgot Password?</a>
							</div>
						</div> */}
						<div class="sign-up-htm">
							<div class="group">
								<label for="user" class="label">Username</label>
								<h3><input id="user" type="text" class="input" onChange={(e) => handleChnage(e, "name")} /></h3>
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label>
								<h3><input id="pass" type="password" class="input" data-type="password" onChange={(e) => handleChnage(e, "password")} /></h3>
							</div>
							<div class="group">
								<label for="pass" class="label">Repeat Password</label>
								<h3><input id="pass" type="password" class="input" data-type="password" /></h3>
							</div>
							<div class="group">
								<label for="pass" class="label">Email Address</label>
								<h3><input id="pass" type="text" class="input" onChange={(e) => handleChnage(e, "email")} /></h3>
							</div>
							<div class="group">
								<input type="submit" class="button" value="Sign Up" onClick={(e) => handlesubmit(e)} />
							</div>
							<div class="hr"></div>
							<div class="foot-lnk">
								<label for="tab-1">Already Member?</label>
							</div>
						</div>
					</div>
				</div>
		
	
	)
}
