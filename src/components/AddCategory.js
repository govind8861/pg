import { useState } from 'react'
import { db } from './Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default function AddCategory() {
	const [add, setAdd] = useState('')
	const [taskcompletionStatus] = useState('Pending')
	const handleform = async data => {
		data.preventDefault()
		try {
			await addDoc(collection(db, 'addCategory'), {
				add: add,
				taskcompletionStatus: taskcompletionStatus,
				created: Timestamp.now(),
			})
			alert('category added')
			setAdd('')
		} catch (err) {
			alert(err)
		}
		setAdd('')
	}

	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5 logincolor">
					{/* <div class="row mt-5 bg-success"> */}
					<div class="col-md-12 col-lg-12 mt-3">
						<div class="title-single-box ">
							<h1 class="title-single pb-3 text-center text-white">Add Category</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 my-5 shadow py-5 rounded">
						<form onSubmit={handleform}>
							<div class="form-group">
								<label className="py-3" for="add">
									Category Name
								</label>
								<input
									type="text"
									class="form-control mb-4 rounded-pill"
									id="add"
									placeholder="enter category name here"
									required
									onChange={data => {
										setAdd(data.target.value)
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
