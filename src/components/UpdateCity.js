import { db } from './Firebase'
import { updateDoc, doc, getDoc } from 'firebase/firestore'

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function UpdateCity() {
	const param = useParams()
	const nav = useNavigate()
	const [id] = useState(param.id)
	const [addCity, setAddCity] = useState('')
	const [addState, setAddState] = useState('')
	const [taskcompletionStatus, settaskcompletionStatus] = useState('Pending')

	useEffect(() => {
		getSingleTaskData()
	})

	const getSingleTaskData = async () => {
		const taskDocRef = doc(db, 'addCity', id)
		const taskSnap = await getDoc(taskDocRef)

		if (taskSnap.exists()) {
			let taskData = taskSnap.data()
			console.log('Document data:', taskSnap.data())
			setAddCity(taskData.addCity)
			setAddState(taskData.addState)
			settaskcompletionStatus(taskData.taskcompletionStatus)
		} else {
			console.log('No such document!')
		}
	}
	const handleform = async data => {
		// setLoading(true)

		data.preventDefault()
		const taskDocRef = doc(db, 'addCity', id)
		try {
			await updateDoc(taskDocRef, {
				addCity: addCity,
				addState: addState,
				taskcompletionStatus: taskcompletionStatus,
			})
			// toast("Updation successfull")
			// setTimeout(() => {
			//     nav("/managecategory")
			// }, 3000);
			nav('/managecity')
		} catch (err) {
			// toast("Updation failed")
			alert(err)
		}
	}

	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5">
					<div class="col-md-12 col-lg-12 logincolor pb-4 mt-5">
						<div class="title-single-box mt-5">
							<h1 class="title-single text-center text-white">Update City</h1>
						</div>
					</div>

					<div className="col-md-12 shadow mt-4">
						<form onSubmit={handleform}>
							<div class="form-group col-md-12">
								<label for="addcategory">City</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="addcategory"
									value={addCity}
									placeholder="enter city name here"
									required
									onChange={data => {
										setAddCity(data.target.value)
									}}
								/>
							</div>
							<div class="form-group col-md-12">
								<label for="addcategory">State</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="addcategory"
									value={addState}
									placeholder="enter city name here"
									required
									onChange={data => {
										setAddState(data.target.value)
									}}
								/>
							</div>
							<div className="mb-4">
								<button type="submit" class="btn btn-success">
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
