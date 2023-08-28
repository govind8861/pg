
import { db } from './Firebase'
import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

export default function UserProfile() {
	const [allTask] = useState([])

  
  useEffect(() => {
    const user = getAuth().currentUser;

    if (user) {
      const uid = user.uid;
      // const q = query(collection(db, 'tasks'), orderBy('created', 'asc'))
      console.log(uid)
      const userRef = db.collection('tasks').where('uid','==',uid);
      console.log(userRef)

      userRef.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const taskData = [];
          querySnapshot.forEach((doc) => {
            taskData.push(doc.data());
            
          });
          console.log("user data",taskData)
          setUserData(taskData);
        } else {
          console.log('User data not found');
        }
      }).catch((error) => {
        console.error('Error getting user document:', error);
      });
    }
  }, []);


	return (
		<>
			<section>
				<div className="container py-5">
					<div className="row mt-5">
						<div className="col mt-5">
							{/* <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav> */}
						</div>
					</div>
					{allTask.map(tasks => (
						<div className="row ">
							<div className="col-lg-3">
								<div className="card mb-4">
									<div className="card-body text-center">
										<img
											src={tasks.data.image}
											alt=""
											className="rounded-circle "
											style={{ width: '200px', height: '210px' }}
										/>

										{/* <h5 className="my-3">{AddRooms.data.name}</h5> */}
										<p className="text-muted mb-1">Full Stack Developer</p>
										<p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
									</div>
								</div>
								{/* <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">https://mdbootstrap.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-github fa-lg" style={{ color: "#3b5998" }}></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-twitter fa-lg" style={{ color: "#3b5998" }}></i>
                      <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-instagram fa-lg" style={{ color: "#3b5998" }}></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                  </ul>
                </div>
              </div> */}
							</div>
							<div className="col-lg-8">
								<div className="card mb-4">
									<div className="card-body">
										<div className="row">
											<div className="col-sm-3">
												<p className="mb-0">Full Name</p>
											</div>
											<div className="col-sm-9">
												{/* {console.log(name)} */}
												<p className="text-muted mb-0">{tasks.data.name}</p>
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<p className="mb-0">Email</p>
											</div>
											<div className="col-sm-9">
												<p className="text-muted mb-0">{tasks.data.email}</p>
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<p className="mb-0">Phone</p>
											</div>
											<div className="col-sm-9">
												<p className="text-muted mb-0">(097) 234-5678</p>
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<p className="mb-0">Mobile</p>
											</div>
											<div className="col-sm-9">
												<p className="text-muted mb-0">(098) 765-4321</p>
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<p className="mb-0">Address</p>
											</div>
											<div className="col-sm-9">
												<p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
											</div>
										</div>
									</div>
								</div>
								{/* <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                      <div className="progress rounded mb-2" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                      <div className="progress rounded" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                      <div className="progress rounded mb-2" style={{ height: "5px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
