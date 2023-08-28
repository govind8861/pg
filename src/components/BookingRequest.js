import { useState } from 'react'
import { db } from './Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useEffect } from 'react'

export default function BookingRequest() {
	useEffect(() => {
		const jsFiles = ['/assets/assets/js/extra.js']

		jsFiles.forEach(filePath => {
			const script = document.createElement('script')
			script.src = filePath
			script.async = true
			document.body.appendChild(script)
		})

		return () => {
			jsFiles.forEach(filePath => {
				const script = document.querySelector(`[src="${filePath}"]`)
				if (script) {
					document.body.removeChild(script)
				}
			})
		}
	}, [])
	const [addCategory, setAddCategory] = useState('')
	const [addRoomAddress, setAddRoomAddress] = useState('')
	const [addCity, setAddCity] = useState('')
	const [addDate, setDate] = useState('')
	const [taskcompletionStatus, settaskcompletionStatus] = useState('Pending')

	const handleform = async data => {
		data.preventDefault()
		try {
			await addDoc(collection(db, 'bookingRequests'), {
				addCategory: addCategory,
				addRoomAddress: addRoomAddress,
				taskcompletionStatus: taskcompletionStatus,
				addCity: addCity,
				addDate: addDate,

				created: Timestamp.now(),
			})
			alert('Request sent')
		} catch (err) {
			alert(err)
		}
	}
	return (
		<>
			<div class="container mt-5">
				<div class="col-md-12 row mt-5">
					<div class="col-md-12 col-lg-12 mt-5">
						<div class="title-single-box mt-5 logincolor p-4 ">
							<h1 class="text-white text-center">Booking</h1>
						</div>
					</div>

					<div className="container shadow mt-4   ">
						<div className="row col-md-12 mb-4 ">
							<form onSubmit={handleform}>
								<div className="form-group my-3">
									<label className="mb-2" for="category">
										Category
									</label>
									<input
										type="text"
										className="form-control "
										id="category"
										onChange={data => {
											setAddCategory(data.target.value)
										}}
									></input>
								</div>
								<div className="form-group my-3">
									<label className="mb-2" for="address">
										Room Address
									</label>
									<input
										type="text"
										id="address"
										className="form-control"
										onChange={data => {
											setAddRoomAddress(data.target.value)
										}}
									></input>
								</div>
								<div className="form-group my-3">
									<label className="mb-2" for="city">
										City
									</label>
									<input
										type="text"
										id="city"
										className="form-control"
										onChange={data => {
											setAddCity(data.target.value)
										}}
									></input>
								</div>
								<div class="form-group">
									<label for="date" className="mb-2 me-2">
										Date
									</label>
									<input
										type="date"
										id="date"
										onChange={data => {
											setDate(data.target.value)
										}}
									></input>
								</div>

								<button type="submit" class="btn btn-success mt-3 mx-auto d-block">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
