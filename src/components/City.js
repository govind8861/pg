import * as React from 'react'
export default function City() {
	return (
		<>
		
			<div class="container mt-5">
				<div class="row mt-5 ">
					<div class="col-md-12 col-lg-12 mt-5 mx-auto logincolor">
						<div class="mt-5 pb-4 ">
							<h1 class="text-white text-center">City</h1>
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
								<th>City Name</th>
								<th>Status</th>
								<th>Created At</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Id</td>
								<td>Name</td>
								<td>Email</td>
								<td>Subject</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
