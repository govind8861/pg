// src/components/ResultPage.js
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Jalandhar from './Jalandhar'
import Kapurthala from './Kapurthala'
import { db, storage } from '../Firebase'
import { collection, updateDoc, doc, getDoc, setDoc } from 'firebase/firestore'

const ResultPage = () => {
	const param = useParams()
	const nav = useNavigate()
	const [addCategory, setAddCategory] = useState('')
	const [addRoomAddress, setAddRoomAddress] = useState('')
	const [addState, setAddState] = useState('')
	const [addCity, setAddCity] = useState('')
	const [addRent, setAddRent] = useState('')
	const [addAccomodation, setAddAccomodation] = useState('')
	const [image, setImage] = useState('')
	const [addDescription, setAddDesccription] = useState('')
	const [file, setFile] = useState(null)
	const [percent, setPercent] = useState(false)
	const [imageUrl, setImageUrl] = useState(null)
	const [taskcompletionStatus, settaskcompletionStatus] = useState('Pending')
	const [fileName, setFileName] = useState()
	const [prevFileName, setPrevFileName] = useState()

	const [id, setId] = useState(param.id)

	useEffect(() => {
		getSingleTaskData()
	}, [id])

	const getSingleTaskData = async () => {
		const taskDocRef = doc(db, 'AddRooms', id)
		const taskSnap = await getDoc(taskDocRef)

		if (taskSnap.exists()) {
			let taskData = taskSnap.data()
			console.log('Document data:', taskSnap.data())
			setAddCategory(taskData.addCategory)
			setAddRoomAddress(taskData.addRoomAddress)
			setAddCity(taskData.addCity)
			setAddState(taskData.addState)
			setAddRent(taskData.addRent)
			setAddAccomodation(taskData.addAccomodation)
			setAddDesccription(taskData.addDescription)
			setPrevFileName(taskData.fileName)
			setImage(taskData.image)
			settaskcompletionStatus(taskData.taskcompletionStatus)
		} else {
			console.log('No such document!')
		}
	}

	return (
		<>
			<section class="intro-single">
				<div class="container">
					<div class="row">
						<div class="title-single-box ">
							<h3 class="fontWeight">
								"Comfort and Convenience: Top Paying Guest Options in {addCity}"
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section class="property-grid grid">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="card-box-a card-shadow">
								<div class="img-box-a">
									<img
										src={image}
										alt=""
										class="img-a img-fluid"
										style={{ height: '480px', width: '100px' }}
									/>
								</div>
								<div class="card-overlay">
									<div class="card-overlay-a-content">
										<div class="card-header-a">
											<h2 class="card-title-a">
												<a href="#">{addCategory}</a>
											</h2>
										</div>
										<div class="card-body-a">
											<div class="price-box d-flex">
												<span class="price-a">rent |₹ {addRent} </span>
											</div>
											<a href="property-single.html" class="link-a">
												Click here to view
												<span class="bi bi-chevron-right"></span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ResultPage
