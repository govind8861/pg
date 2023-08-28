// src/components/ResultPage.js
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../Firebase'
import {  doc, getDoc } from 'firebase/firestore'

const ResultPage = () => {
	const [addCategory, setAddCategory] = useState('')
	const [addCity, setAddCity] = useState('')
	const [addRent, setAddRent] = useState('')
	const [image] = useState('')


	useEffect(() => {
		getSingleTaskData()
	}, [])

	const getSingleTaskData = async () => {
		const taskDocRef = doc(db, 'AddRooms', id)
		const taskSnap = await getDoc(taskDocRef)

		if (taskSnap.exists()) {
			let taskData = taskSnap.data()
			console.log('Document data:', taskSnap.data())
			setAddCategory(taskData.addCategory)
			setAddCity(taskData.addCity)
			setAddState(taskData.addState)
			setAddRent(taskData.addRent)
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
												<button >{addCategory}</button>
											</h2>
										</div>
										<div class="card-body-a">
											<div class="price-box d-flex">
												<span class="price-a">rent |₹ {addRent} </span>
											</div>
											<button  class="link-a">
												Click here to view
												<span class="bi bi-chevron-right"></span>
											</button>
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
