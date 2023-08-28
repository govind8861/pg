import { db, storage } from './Firebase'
import { updateDoc, doc, getDoc } from 'firebase/firestore'

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
export default function UpdateRoom() {
	const param = useParams()
	const nav = useNavigate()
	const [id] = useState(param.id)
	
	const [addCategory, setAddCategory] = useState('')
	const [addRoomAddress, setAddRoomAddress] = useState('')
	const [addState, setAddState] = useState('')
	const [addCity, setAddCity] = useState('')
	const [addRent, setAddRent] = useState('')
	const [addAccomodation, setAddAccomodation] = useState('')
	const [image, setImage] = useState('')
	const [addDescription, setAddDesccription] = useState('')
	const [file, setFile] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	const [taskcompletionStatus, settaskcompletionStatus] = useState('Pending')
	const [fileName, setFileName] = useState()
	const [prevFileName, setPrevFileName] = useState()

	useEffect(() => {
		getSingleTaskData()
	})

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
	const handleSubmit = async data => {
		// setLoading(true)

		data.preventDefault()
		if (!!file) {
			uploadFile()
		} else updateData()
	}

	async function updateData() {
		const taskDocRef = doc(db, 'AddRooms', id)
		try {
			let data = {
				addCategory: addCategory,
				addRoomAddress: addRoomAddress,
				addState: addState,
				addCity: addCity,
				addRent: addRent,
				addAccomodation: addAccomodation,
				taskcompletionStatus: taskcompletionStatus,
				addDescription: addDescription,
			}
			if (!!imageUrl) {
				data.image = imageUrl
				data.fileName = fileName
			}
			await updateDoc(taskDocRef, data)
			nav('/manageroom')
		} catch (err) {
			alert(err)
		}
	}
	useEffect(() => {
		if (!!imageUrl) {
			deletePreviousImage()
			updateData()
		}
	}, [imageUrl])
	function deletePreviousImage() {
		const fileRef = ref(storage, 'files/' + prevFileName)
		deleteObject(fileRef)
			.then(function () {
				// File deleted successfully
				console.log('Prev File Deleted')
			})
			.catch(function (error) {
				// Some Error occurred
				console.log('Error deleting previous image')
			})
	}
	const uploadFile = () => {
		if (!file) {
			alert('Please upload an image first!')
		}
		const fileName = `${Date.now()}-${file.name}`
		const storageRef = ref(storage, `/files/${fileName}`)

		// progress can be paused and resumed. It also exposes progress updates.
		// Receives the storage reference and the file to upload.
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
				// update progress
				setPercent(percent)
			},
			err => console.log(err),
			() => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then(url => {
					// console.log(url);
					setImageUrl(url)
					setFileName(fileName)
					setImage(url)
				})
			},
		)
	}

	return (
		<>
			<div class="container mt-5">
				<div class="row mt-5">
					<div class="col-md-12 col-lg-12 logincolor pb-4 mt-5">
						<div class="title-single-box mt-5">
							<h1 class="title-single text-center text-white">Update Room</h1>
						</div>
					</div>

					<div className="col-md-12 shadow mt-4">
						<form onSubmit={handleSubmit}>
							<div class="form-group col-md-12">
								<label for="addcategory">Category Name</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="addcategory"
									value={addCategory}
									placeholder="enter category name here"
									required
									onChange={data => {
										setAddCategory(data.target.value)
									}}
								/>
							</div>
							<div class="form-group col-md-12">
								<label for="room">Room Address</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="room"
									value={addRoomAddress}
									placeholder="enter Room Address here"
									required
									onChange={data => {
										setAddRoomAddress(data.target.value)
									}}
								/>
							</div>
							<div class="form-group col-md-12">
								<label for="city">City</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="city"
									value={addCity}
									placeholder="enter city name here"
									required
									onChange={data => {
										setAddCity(data.target.value)
									}}
								/>
							</div>
							<div class="form-group col-md-12">
								<label for="accomodation">Accomodation</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="accomodation"
									value={addAccomodation}
									placeholder="enter accomodation name here"
									required
									onChange={data => {
										setAddAccomodation(data.target.value)
									}}
								/>
							</div>
							<div class="form-group col-md-6">
								<label for="img">Image</label>
								<input
									type="file"
									class="form-control mb-4 mt-2"
									id="img"
									placeholder="enter Image name here"
									required
									onChange={data => {
										setFile(data.target.files[0])
									}}
								/>
							</div>
							<img src={image} width={100} height={100}></img>
							<div class="form-group col-md-12">
								<label for="desc">Description</label>
								<textarea
									type="text"
									class="form-control mb-4 mt-2"
									id="desc"
									value={addDescription}
									rows={5}
									placeholder="enter Description name here"
									required
									onChange={data => {
										setAddDesccription(data.target.value)
									}}
								/>
							</div>
							<div class="form-group col-md-12">
								<label for="addcategory">Status</label>
								<input
									type="text"
									class="form-control mb-4 mt-2"
									id="addcategory"
									placeholder="enter status name here"
									required
								/>
							</div>
							<div className="mb-4">
								<button type="submit" class="btn btn-success d-block mx-auto">
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
