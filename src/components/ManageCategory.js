import { Link } from 'react-router-dom'
import { db } from './Firebase'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
export default function ManageCategory() {
	const [allTask, SetTask] = useState([])

	useEffect(() => {
		const q = query(collection(db, 'addCategory'), orderBy('created', 'asc'))
		onSnapshot(q, querySnapshot => {
			// console.log(querySnapshot.docs)
			SetTask(
				querySnapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				})),
			)
		})
	}, [])
	const getdate = datetime => {
		const date = datetime.toDate().toString()
		const s = date.split(' ')
		console.log(s)
		const returndate = s[2] + '-' + s[1] + '-' + s[3]
		return returndate
	}
	const deleteHandle = async id => {
		const taskDocRef = doc(db, 'addCategory', id)
		try {
			await deleteDoc(taskDocRef)
		} catch (err) {
			alert(err)
		}
	}
	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5 bg-light">
					<div class="col-md-12 col-lg-12 mt-3">
						<div class="title-single-box ">
							<h1 class="title-single pb-3 text-center">Manage Category</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 my-5">
						<table className="table table-striped ">
							<thead className="table-dark">
								<tr>
									<th>id</th>
									<th>Category name</th>
									<th>Status</th>
									<th>Created At</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allTask.map((addCategory, index) => (
									<tr>
										<td>{index + 1}</td>
										<td>{addCategory.data.add}</td>
										<td>{addCategory.data.taskcompletionStatus}</td>
										<td>{getdate(addCategory.data.created)}</td>
										<td>
											<Link to={'/Updatecategory/' + addCategory.id}>
												{' '}
												<button className="btn btn-success">Edit</button>
											</Link>
											&nbsp;&nbsp;&nbsp;
											<button
												type="submit"
												className="btn btn-danger"
												onClick={() => {
													const confirmbox = window.confirm('DO YOU REALLY WANT TO DELETE?')
													if (confirmbox === true) {
														deleteHandle(addCategory.id)
													}
												}}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
