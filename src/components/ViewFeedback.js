
import { db } from './Firebase'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

export default function ViewFeedback() {
	const [allTask, SetTask] = useState([])

	useEffect(() => {
		const q = query(collection(db, 'Feedbacks'), orderBy('created', 'asc'))
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
	
	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5 logincolor">
					<div class="col-md-12 mt-5 col-lg-12">
						<div class="mt-5">
							<h1 class="pb-4 p-1 text-white text-center">Feedback</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row mt-4">
					<table className="table table-striped">
						<thead className="table-dark">
							<tr>
								<th>id</th>
								<th>Category</th>
								<th>Rooms</th>
								<th>Feedback</th>
								<th>UID</th>
								<th>Created_at</th>
							</tr>
						</thead>
						<tbody>
							{allTask.map((Feedbacks, index) => (
								<tr>
									<td>{index + 1}</td>
									<td>{Feedbacks.id}</td>
									<td>{Feedbacks.data.addCategory}</td>
									<td>{Feedbacks.data.addRoom}</td>

									<td>{Feedbacks.data.addFeedback}</td>
									<td>{getdate(Feedbacks.data.created)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
