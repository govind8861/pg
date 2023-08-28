import { Link } from 'react-router-dom'
import { db } from './Firebase'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore'

export default function ManageCity() {
	// const data=[
	//     {
	//         city:'jalandhar',state:'punjab',date:'3/2/23'
	//     },
	//     {
	//         city:'gorakhpur',state:'up'
	//     },
	//     {
	//         city:'jalandhar',state:'punjab'
	//     },
	//     {
	//         city:'jalandhar',state:'punjab'
	//     },
	//     {
	//         city:'jalandhar',state:'punjab'
	//     },
	// ]
	const [allTask, SetTask] = useState([])

	useEffect(() => {
		const q = query(collection(db, 'addCity'), orderBy('created', 'asc'))
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
		const taskDocRef = doc(db, 'addCity', id)
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
					<div class="col-md-12 mt-5 col-lg-12">
						<div class="mt-5">
							<h1 class="pb-4 p-1 text-center">Manage City</h1>
						</div>
					</div>

					<div className="col-md-12">
						<table className="table table-striped">
							<thead className="table-dark">
								<tr>
									<th>id</th>
									<th>City name</th>
									<th>State</th>
									<th>Created At</th>

									<th>Status </th>
									<th>Action </th>
								</tr>
							</thead>
							<tbody>
								{allTask.map((addCity, index) => (
									<tr>
										<td>{index + 1}</td>
										<td>{addCity.data.addCity}</td>
										<td>{addCity.data.addState}</td>
										<td>{addCity.data.taskcompletionStatus}</td>
										<td>{getdate(addCity.data.created)}</td>
										<td>
											<Link to={'/updatecity/' + addCity.id}>
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
														deleteHandle(addCity.id)
													}
												}}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
							{/* <tbody>
                    {data.map((element,index)=>(
                             <tr >
                    
                             <td>{index+1}</td>
                             <td>{element.city}</td>
                             <td>{element.state}</td>
                             <td>{element.date}</td>

                             <td>
                             <Link to='/updatecity'> <i class="fa fa-edit fa-2x "></i></Link>&nbsp;&nbsp;

                                                                                        
                                <i class="fa fa-trash-o fa-2x "></i>
                            </td>
                            
                         </tr>
                    ))
                    }
               
                </tbody> */}
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
