import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import CustomInput from '../layout/CustomInput'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../Firebase'
import 'react-responsive-modal/styles.css'

export default function Login({ onNavigate }) {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	// const handleform =(data)=>{
	//     data.preventDefault()
	//     if(email =="govindmaurya8699@gmail.com" && pass=="gobind"){
	//         nav('/register')
	//             toast("Succsefully login")
	//         console.log("successful")
	//     }else{
	//         console.log("unsuccess")
	//         toast("error occured")
	//     }

	// }
	const handleSubmit = async e => {
		e.preventDefault()
		await signInWithEmailAndPassword(auth, email, pass)
			.then(userCredential => {
				// Signed in
				// const user = userCredential.user
				alert('Login Successful')
				onNavigate('/home')

				// console.log(user);
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorCode, errorMessage)
				alert('error')
			})
		// else await createUserWithEmailAndPassword(auth, email, password)
		//     .then((userCredential) => {
		//         // Signed in
		//         const user = userCredential.user;
		//         console.log(user);
		//         alert("User Created")
		//         setIsLogin(true)

		//         // ...
		//     })
		//     .catch((error) => {
		//         const errorCode = error.code;
		//         const errorMessage = error.message;
		//         console.log(errorCode, errorMessage);
		//         alert("Error: " + errorMessage)
		//         // ..
		//     });
	}


	const handlePasswordChange = data => {
		setPass(data.target.value)
	}
	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<div class="container p-3  " style={{ width: '400px' }}>
				<div class="row mt-1 logincolor rounded ">
					{/* <div class="row mt-5 bg-success"> */}
					<div class="col-md col-lg mt-2">
						<div class="title-single-box mt-1">
							<h1 class="title-single pb-3 text-center text-white">Sign in</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 py-3 mt-2 rounded">
						<form onSubmit={handleSubmit}>
							<div class="form-group">
								<label className="py-3">Email Address</label>
								<input
									type="email"
									class="form-control mb-1 rounded-pill"
									id="addcategory"
									placeholder="enter your email here"
									required
									onChange={data => {
										setEmail(data.target.value)
									}}
								/>
							</div>
							<div class="form-group">
								<label className="py-3">Password</label>
								{/* <input type="password" class="form-control mb-4 rounded-pill" id="addcategory"  placeholder="enter your password here" required
                          onChange={(data)=>{setPass(data.target.value)}}/> */}
								<CustomInput
									className={'form-control rounded-pill'}
									value={pass}
									onChange={handlePasswordChange}
								/>
							</div>

							<button type="submit" class="btn btn-success rounded mx-auto d-block mt-4">
								Submit
							</button>
						</form>

						<div class="form-group row mt-3">
							<Link className=" text " to="/forgot" onClick={() => onNavigate('/forgot')}>
								Forgot Password
							</Link>

							<span>
								Don't have an account?
								<Link to="/register" onClick={() => onNavigate('/register')}>
									{' '}
									Register
								</Link>
							</span>
						</div>
						<button onClick={signInWithGoogle} className="btn  btn-a rounded mt-3 text-white">
							Sign in with &nbsp;<i className="fa fa-google"></i>
						</button>
					</div>
				</div>
			</div>

			<ToastContainer />
		</>
	)
}
