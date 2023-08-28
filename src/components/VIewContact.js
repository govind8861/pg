
import { db } from './Firebase'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore'

export default function ViewContact() {
	const [allTask, SetTask] = useState([])

	useEffect(() => {
		const q = query(collection(db, 'Contacts'), orderBy('created', 'asc'))
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
		const taskDocRef = doc(db, 'Contacts', id)
		try {
			await deleteDoc(taskDocRef)
		} catch (err) {
			alert(err)
		}
	}
	const handleEmailButtonClick = data => {
		alert(data)
		const mailtoLink = `mailto:${data}`
		window.location.href = mailtoLink
	}

	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5">
					<div class="col-md-12 col-lg-12 mt-2 logincolor">
						<div class="mt-3 pb-3 ">
							<h1 class="text-white text-center"> View Contact</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-4">
				<div className="row">
					<table className="table table-striped">
						<thead className="table-dark">
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Subject</th>
								<th>Message</th>
								<th>Uid</th>
								<th>Revert</th>
								<th>Created_at</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{allTask.map((Contacts, index) => (
								<tr>
									<td>{index + 1}</td>
									<td>{Contacts.data.addName}</td>
									<td>{Contacts.data.addEmail}</td>
									<td>{Contacts.data.addSubject}</td>

									<td>{Contacts.data.addMessage}</td>
									<td>1</td>
									<td>{Contacts.data.taskcompletionStatus}</td>
									<td>{getdate(Contacts.data.created)}</td>
									<td>
										<button
											className="btn btn-dark"
											onClick={e => handleEmailButtonClick(Contacts.data.addEmail)}
										>
											click
										</button>{' '}
										&nbsp;&nbsp;
										<button
											type="submit"
											className="btn btn-danger"
											onClick={() => {
												const confirmbox = window.confirm('DO YOU REALLY WANT TO DELETE?')
												if (confirmbox === true) {
													deleteHandle(Contacts.id)
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
		</>
	)
}
