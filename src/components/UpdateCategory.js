import { db } from './Firebase'
import {  updateDoc, doc, getDoc } from 'firebase/firestore'

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function UpdateCategory() {
	const param = useParams()
	const nav = useNavigate()
	const [id] = useState(param.id)
	useEffect(() => {
		getSingleTaskData()
	})

	const [add, setAdd] = useState('')
	const [taskcompletionStatus, settaskcompletionStatus] = useState('Pending')
	const getSingleTaskData = async () => {
		const taskDocRef = doc(db, 'addCategory', id)
		const taskSnap = await getDoc(taskDocRef)

		if (taskSnap.exists()) {
			let taskData = taskSnap.data()
			console.log('Document data:', taskSnap.data())
			setAdd(taskData.add)
			settaskcompletionStatus(taskData.taskcompletionStatus)
		} else {
			console.log('No such document!')
		}
	}
	const handleform = async data => {
		// setLoading(true)

		data.preventDefault()
		const taskDocRef = doc(db, 'addCategory', id)
		try {
			await updateDoc(taskDocRef, {
				add: add,
				taskcompletionStatus: taskcompletionStatus,
			})
			// toast("Updation successfull")
			// setTimeout(() => {
			//     nav("/managecategory")
			// }, 3000);
			nav('/managecategory')
		} catch (err) {
			// toast("Updation failed")
			alert(err)
		}
	}

	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5">
					<div class="col-md-12 col-lg-12 mt-5 logincolor pb-4">
						<div class="title-single-box mt-5">
							<h1 class="title-single text-center text-white">Update Category</h1>
						</div>
					</div>

					<div className="col-md-12 mt-5 shadow">
						<form onSubmit={handleform}>
							<div class="form-group col-md-12 ">
								<label for="addcategory"></label>
								<input
									type="text"
									class="form-control mb-4"
									id="addcategory"
									value={add}
									placeholder="enter category name here"
									required
									onChange={data => {
										setAdd(data.target.value)
									}}
								/>
							</div>
							<div className="mb-4">
								<button type="submit" class="btn btn-success p-2">
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
