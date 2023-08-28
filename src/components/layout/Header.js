import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'

import 'react-responsive-modal/styles.css'
import Search from '../Search'
import useDisclosure from '../Hooks/useDisclosure'
import AuthPopup from '../auth/AuthPopup'
import { auth } from '../Firebase'

export default function Header() {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [showOffcanvas, setShowOffcanvas] = useState(false)
	const [view, setView] = useState('login')
	const navigate = useNavigate()
	const handleClose = () => {
		onClose()
		setShowOffcanvas(false)
	}

	const toggleOffcanvas = () => {
		setShowOffcanvas(!showOffcanvas)
	}
	const onNavigate = path => {
		navigate(path)
		onClose()
	}
	const onClickHandle = view => {
		setView(view)
		onOpen()
	}
	const handleLogout = async () => {
		try {
			console.log(auth)
			await auth.signOut()
			navigate('/about')
		} catch (error) {
			console.error('Error Logging Out', error)
		}
	}
	const[openMenu,setOpenMenu] = useState(false)

	return (
		<>
			<AuthPopup isopen={isOpen} onClose={onClose} view={view} componentProps={{ onNavigate }} />
			<Navbar className="bg-body-tertiary mb-3">
				<Container fluid>
					<Button variant="outline-success" onClick={toggleOffcanvas} className="ms-auto">
						Search
					</Button>
					<Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="end" style={{ width: '50%' }}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>RoomNinja</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Search />
						</Offcanvas.Body>
					</Offcanvas>
				</Container>
			</Navbar>

			<nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
				<div class="container">
					<button
						class="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarDefault"
						aria-controls="navbarDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={()=>{setOpenMenu(!openMenu)}}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<Link class="navbar-brand text-brand" to="/home">
						Room<span class="color-b">Ninja</span>
					</Link>

					<div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
						<ul class="navbar-nav">
							<li class="nav-item">
								<Link class="nav-link " to="/home" onClick={handleClose}>
									Home
								</Link>
							</li>

							<li class="nav-item">
								<Link class="nav-link " to="/about" onClick={handleClose}>
									About
								</Link>
							</li>

							<li class="nav-item">
								<Link class="nav-link " to="/Property" onClick={handleClose}>
									PG
								</Link>
							</li>

							<li class="nav-item">
								<Link class="nav-link " to="/contact" onClick={handleClose}>
									Contact
								</Link>
							</li>

							<li class="nav-item dropdown">
								<Link
									class="nav-link dropdown-toggle"
									to="/dashboard"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									onClick={handleClose}
								>
									Dashboard
								</Link>
								<div class="dropdown-menu">
									<Link class="dropdown-item " to="/booking" onClick={handleClose}>
										Booking table
									</Link>
									<Link class="dropdown-item " to="/city" onClick={handleClose}>
										City
									</Link>

									<Link class="dropdown-item " to="/addcategory" onClick={handleClose}>
										Add Category
									</Link>

									<Link class="dropdown-item " to="managecategory" onClick={handleClose}>
										Manage Category
									</Link>
									<Link class="dropdown-item " to="/updatecategory" onClick={handleClose}>
										Update Category
									</Link>
									<Link class="dropdown-item " to="/addcity" onClick={handleClose}>
										{' '}
										Add City
									</Link>
									<Link class="dropdown-item " to="/managecity" onClick={handleClose}>
										Manage City
									</Link>
									<Link class="dropdown-item " to="/updatecity" onClick={handleClose}>
										Update City
									</Link>
									<Link class="dropdown-item " to="/addroom" onClick={handleClose}>
										Add Room
									</Link>
									<Link class="dropdown-item " to="/manageroom" onClick={handleClose}>
										Manage Room
									</Link>
									<Link class="dropdown-item " to="/updateroom" onClick={handleClose}>
										Update Room
									</Link>
									<Link class="dropdown-item " to="/viewfeedback" onClick={handleClose}>
										View Feedback
									</Link>
									<Link class="dropdown-item " to="/viewcontact " onClick={handleClose}>
										View Contact
									</Link>
								</div>
							</li>
							<li class="nav-item">
								<Link
									class="nav-link "
									onClick={() => {
										onClickHandle('login')
									}}
								>
									Log in
								</Link>
							</li>
							<li class="nav-item">
								<Link
									class="nav-link "
									onClick={() => {
										onClickHandle('register')
									}}
								>
									Register
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link " to="/bookingrequest" onClick={handleClose}>
									Booking
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link " to="/feedback" onClick={handleClose}>
									Feedback
								</Link>
							</li>
						</ul>
					</div>
					<button className="btn btn-danger me-3" onClick={handleLogout}>
						Logout
					</button>

					<button
						type="submit"
						class="btn btn-light pe-3 "
						data-bs-toggle="modal"
						data-bs-target="#exampleModal"
						onClick={() => setShowOffcanvas(true)}
					>
						&nbsp;<i class="bi bi-search"></i>&nbsp;&nbsp;Search
					</button>
				</div>
			</nav>
		</>
	)
}
