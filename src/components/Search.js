import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from './Firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

import { Link} from 'react-router-dom'

export default function Search() {
	// const Navigation = useNavigate()
	// const [cityName, setCityName] = useState('')
	// const handleInput = data => {
	// 	setCityName(data.target.value)
	// }
	// const handleSearch = () => {
	// 	if (cityName) {
	// 		Navigation(`/results/${encodeURIComponent(cityName.toLowerCase())}`)
	// 	}
	// }
	const [allTask, SetTask] = useState([])
	useEffect(() => {
		const q = query(collection(db, 'AddRooms'), orderBy('created', 'asc'))
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
	
	return (
		<>
			<div class="container ">
				<div class="row logincolor">
					{/* <div class="row mt-5 bg-success"> */}
					<div class="col-md-12 col-lg-12 ">
						<div class="title-single-box mt-3">
							<h1 class="title-single pb-3 text-center text-white">Search</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 row my-4 shadow py-5 rounded ">
						<div className="row">
							<div className="row ">
								<form className="d-flex">
									<input
										type="text"
										placeholder="Enter city name"
										className="form-control py-3"
										/>
									<div className="d-flex border align-items-center">
										<button className=" btn btn-xl" >
											<i className="fa fa-search fa-2x"></i>
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="d-flex  flex-wrap">
							{allTask.map((AddRooms) => (
							<Link to={'/results/'+ AddRooms.id}>
							<div className="row mt-3 ms-1">
								<div class="p-2" >
									<i className="fa fa-globe fa-3x"></i>
								</div>
								<div class="p-2">{AddRooms.data.addCity}</div>
							</div>
							</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
