import { useState } from 'react'
import { db } from './Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default function AddCity() {
	const [addCity, setAddCity] = useState('')
	const [addState, setAddState] = useState('')
	const [taskcompletionStatus, settaskcompletionStatus] = useState('Pending')

	const handleform = async data => {
		data.preventDefault()
		try {
			await addDoc(collection(db, 'addCity'), {
				addCity: addCity,
				addState: addState,
				taskcompletionStatus: taskcompletionStatus,
				created: Timestamp.now(),
			})
			alert('city added')
		} catch (err) {
			alert(err)
		}
	}

	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5 logincolor">
					{/* <div class="row mt-5 bg-success"> */}
					<div class="col-md-12 col-lg-12 mt-3">
						<div class="title-single-box ">
							<h1 class="title-single pb-3 text-center text-white">Add City & State</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 my-4 shadow py-5 rounded">
						<form onSubmit={handleform}>
							<div class="form-group">
								<label className="py-3" for="addcity">
									City
								</label>
								<input
									type="text"
									class="form-control mb-4 rounded-pill"
									id="addcity"
									placeholder="enter city name here"
									required
									onChange={data => {
										setAddCity(data.target.value)
									}}
								/>
							</div>
							<div class="form-group">
								<label className="py-3" for="addstate">
									State
								</label>
								<input
									type="text"
									class="form-control mb-4 rounded-pill"
									id="addstate"
									placeholder="enter city name here"
									required
									onChange={data => {
										setAddState(data.target.value)
									}}
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
