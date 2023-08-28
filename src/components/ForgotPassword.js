import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './Firebase'
import { useNavigate } from 'react-router-dom'

export default function ForgotPAssword() {
	// return(
	//     < >
	//     <div className="bg-secondary">
	//     <div className="text-center border-secondary p-5" style={{'margin-top':'140px'}}>
	//     <h1 className="border">Forgot Password</h1>
	//     <form>
	//         <input type="email" className="mt-4 rounded"></input><br/>
	//         <button className="btn btn-secondary mt-4" >Submit</button>
	//     </form>
	//     </div>
	//     </div>
	//     </>
	// )
	const handleSubmit = async e => {
		e.preventDefault()
		const emailVal = e.target.add.value
		console.log(emailVal)

		sendPasswordResetEmail(auth, emailVal)
			.then((data, err) => {
				alert('check your email')
			})
			.catch(err => {
				// nav('/Login')
				alert(err)
			})
	}
	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5 logincolor rounded">
					<div class="col-md-12 col-lg-12 mt-2 ">
						<div class="title-single-box  ">
							<h1 class="title-single pb-3 text-center text-white">Forgot Password</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 my-5 shadow py-5 rounded">
						<form onSubmit={e => handleSubmit(e)}>
							<div class="form-group">
								<label className="py-3 px-2" for="add">
									Enter your Email
								</label>
								<input
									type="email"
									class="form-control mb-4 rounded-pill"
									id="add"
									placeholder="enter category name here"
									required
								/>
							</div>
							<button type="submit" class="btn btn-success mx-auto d-block">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
