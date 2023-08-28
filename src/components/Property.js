import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Property() {
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
	return (
		<>
			<div class="click-closed"></div>
			<div class="box-collapse">
				<div class="title-box-d">
					<h3 class="title-d">Search Property</h3>
				</div>
				<span class="close-box-collapse right-boxed bi bi-x"></span>
				<div class="box-collapse-wrap form">
					<form class="form-a">
						<div class="row">
							<div class="col-md-12 mb-2">
								<div class="form-group">
									<label class="pb-2" for="Type">
										Keyword
									</label>
									<input
										type="text"
										class="form-control form-control-lg form-control-a"
										placeholder="Keyword"
									/>
								</div>
							</div>
							<div class="col-md-6 mb-2">
								<div class="form-group mt-3">
									<label class="pb-2" for="Type">
										Type
									</label>
									<select class="form-control form-select form-control-a" id="Type">
										<option>All Type</option>
										<option>For Rent</option>
										<option>For Sale</option>
										<option>Open House</option>
									</select>
								</div>
							</div>
							<div class="col-md-6 mb-2">
								<div class="form-group mt-3">
									<label class="pb-2" for="city">
										City
									</label>
									<select class="form-control form-select form-control-a" id="city">
										<option>All City</option>
										<option>Alabama</option>
										<option>Arizona</option>
										<option>California</option>
										<option>Colorado</option>
									</select>
								</div>
							</div>
							<div class="col-md-6 mb-2">
								<div class="form-group mt-3">
									<label class="pb-2" for="bedrooms">
										Bedrooms
									</label>
									<select class="form-control form-select form-control-a" id="bedrooms">
										<option>Any</option>
										<option>01</option>
										<option>02</option>
										<option>03</option>
									</select>
								</div>
							</div>
							<div class="col-md-6 mb-2">
								<div class="form-group mt-3">
									<label class="pb-2" for="garages">
										Garages
									</label>
									<select class="form-control form-select form-control-a" id="garages">
										<option>Any</option>
										<option>01</option>
										<option>02</option>
										<option>03</option>
										<option>04</option>
									</select>
								</div>
							</div>
							<div class="col-md-6 mb-2">
								<div class="form-group mt-3">
									<label class="pb-2" for="bathrooms">
										Bathrooms
									</label>
									<select class="form-control form-select form-control-a" id="bathrooms">
										<option>Any</option>
										<option>01</option>
										<option>02</option>
										<option>03</option>
									</select>
								</div>
							</div>
							<div class="col-md-6 mb-2">
								<div class="form-group mt-3">
									<label class="pb-2" for="price">
										Min Price
									</label>
									<select class="form-control form-select form-control-a" id="price">
										<option>Unlimite</option>
										<option>$50,000</option>
										<option>$100,000</option>
										<option>$150,000</option>
										<option>$200,000</option>
									</select>
								</div>
							</div>
							<div class="col-md-12">
								<button type="submit" class="btn btn-b">
									Search Property
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			{/* <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div class="container">
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a class="navbar-brand text-brand" href="index.html">Estate<span class="color-b">Agency</span></a>

      <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul class="navbar-nav">

        <li class="nav-item">
          <Link class="nav-link " to="/home">Home</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link " to="/about">About</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link " to="/Property">Property</Link>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="blog-grid.html">Blog</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
            <div class="dropdown-menu">
              <a class="dropdown-item " href="property-single.html">Property Single</a>
              <a class="dropdown-item " href="blog-single.html">Blog Single</a>
              <a class="dropdown-item " href="agents-grid.html">Agents Grid</a>
              <a class="dropdown-item " href="agent-single.html">Agent Single</a>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
        <i class="bi bi-search"></i>
      </button>

    </div>
  </nav> */}
			<main id="main">
				<section class="intro-single">
					<div class="container">
						<div class="row">
							<div class="col-md-12 col-lg-8">
								<div class="title-single-box">
									<h1 class="title-single">Our Amazing Properties</h1>
								</div>
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
										<img src="/assets/assets/img/property-1.jpg" alt="" class="img-a img-fluid" />
									</div>
									<div class="card-overlay">
										<div class="card-overlay-a-content">
											<div class="card-header-a">
												<h2 class="card-title-a">
													<a href="#">
														204 Mount
														<br /> Olive Road Two
													</a>
												</h2>
											</div>
											<div class="card-body-a">
												<div class="price-box d-flex">
													<span class="price-a">rent | $ 12.000</span>
												</div>
												<a href="property-single.html" class="link-a">
													Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
											</div>
											<div class="card-footer-a">
												<ul class="card-info d-flex justify-content-around">
													<li>
														<h4 class="card-info-title">Area</h4>
														<span>
															340m
															<sup>2</sup>
														</span>
													</li>
													<li>
														<h4 class="card-info-title">Beds</h4>
														<span>2</span>
													</li>
													<li>
														<h4 class="card-info-title">Baths</h4>
														<span>4</span>
													</li>
													<li>
														<h4 class="card-info-title">Garages</h4>
														<span>1</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card-box-a card-shadow">
									<div class="img-box-a">
										<img src="/assets/assets/img/property-3.jpg" alt="" class="img-a img-fluid" />
									</div>
									<div class="card-overlay">
										<div class="card-overlay-a-content">
											<div class="card-header-a">
												<h2 class="card-title-a">
													<a href="#">
														204 Mount
														<br /> Olive Road Two
													</a>
												</h2>
											</div>
											<div class="card-body-a">
												<div class="price-box d-flex">
													<span class="price-a">rent | $ 12.000</span>
												</div>
												<a href="property-single.html" class="link-a">
													Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
											</div>
											<div class="card-footer-a">
												<ul class="card-info d-flex justify-content-around">
													<li>
														<h4 class="card-info-title">Area</h4>
														<span>
															340m
															<sup>2</sup>
														</span>
													</li>
													<li>
														<h4 class="card-info-title">Beds</h4>
														<span>2</span>
													</li>
													<li>
														<h4 class="card-info-title">Baths</h4>
														<span>4</span>
													</li>
													<li>
														<h4 class="card-info-title">Garages</h4>
														<span>1</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card-box-a card-shadow">
									<div class="img-box-a">
										<img src="/assets/assets/img/property-6.jpg" alt="" class="img-a img-fluid" />
									</div>
									<div class="card-overlay">
										<div class="card-overlay-a-content">
											<div class="card-header-a">
												<h2 class="card-title-a">
													<a href="#">
														204 Mount
														<br /> Olive Road Two
													</a>
												</h2>
											</div>
											<div class="card-body-a">
												<div class="price-box d-flex">
													<span class="price-a">rent | $ 12.000</span>
												</div>
												<a href="property-single.html" class="link-a">
													Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
											</div>
											<div class="card-footer-a">
												<ul class="card-info d-flex justify-content-around">
													<li>
														<h4 class="card-info-title">Area</h4>
														<span>
															340m
															<sup>2</sup>
														</span>
													</li>
													<li>
														<h4 class="card-info-title">Beds</h4>
														<span>2</span>
													</li>
													<li>
														<h4 class="card-info-title">Baths</h4>
														<span>4</span>
													</li>
													<li>
														<h4 class="card-info-title">Garages</h4>
														<span>1</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card-box-a card-shadow">
									<div class="img-box-a">
										<img src="/assets/assets/img/property-7.jpg" alt="" class="img-a img-fluid" />
									</div>
									<div class="card-overlay">
										<div class="card-overlay-a-content">
											<div class="card-header-a">
												<h2 class="card-title-a">
													<a href="#">
														204 Mount
														<br /> Olive Road Two
													</a>
												</h2>
											</div>
											<div class="card-body-a">
												<div class="price-box d-flex">
													<span class="price-a">rent | $ 12.000</span>
												</div>
												<a href="property-single.html" class="link-a">
													Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
											</div>
											<div class="card-footer-a">
												<ul class="card-info d-flex justify-content-around">
													<li>
														<h4 class="card-info-title">Area</h4>
														<span>
															340m
															<sup>2</sup>
														</span>
													</li>
													<li>
														<h4 class="card-info-title">Beds</h4>
														<span>2</span>
													</li>
													<li>
														<h4 class="card-info-title">Baths</h4>
														<span>4</span>
													</li>
													<li>
														<h4 class="card-info-title">Garages</h4>
														<span>1</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card-box-a card-shadow">
									<div class="img-box-a">
										<img src="/assets/assets/img/property-8.jpg" alt="" class="img-a img-fluid" />
									</div>
									<div class="card-overlay">
										<div class="card-overlay-a-content">
											<div class="card-header-a">
												<h2 class="card-title-a">
													<a href="#">
														204 Mount
														<br /> Olive Road Two
													</a>
												</h2>
											</div>
											<div class="card-body-a">
												<div class="price-box d-flex">
													<span class="price-a">rent | $ 12.000</span>
												</div>
												<a href="property-single.html" class="link-a">
													Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
											</div>
											<div class="card-footer-a">
												<ul class="card-info d-flex justify-content-around">
													<li>
														<h4 class="card-info-title">Area</h4>
														<span>
															340m
															<sup>2</sup>
														</span>
													</li>
													<li>
														<h4 class="card-info-title">Beds</h4>
														<span>2</span>
													</li>
													<li>
														<h4 class="card-info-title">Baths</h4>
														<span>4</span>
													</li>
													<li>
														<h4 class="card-info-title">Garages</h4>
														<span>1</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card-box-a card-shadow">
									<div class="img-box-a">
										<img src="/assets/assets/img/property-10.jpg" alt="" class="img-a img-fluid" />
									</div>
									<div class="card-overlay">
										<div class="card-overlay-a-content">
											<div class="card-header-a">
												<h2 class="card-title-a">
													<a href="#">
														204 Mount
														<br /> Olive Road Two
													</a>
												</h2>
											</div>
											<div class="card-body-a">
												<div class="price-box d-flex">
													<span class="price-a">rent | $ 12.000</span>
												</div>
												<a href="property-single.html" class="link-a">
													Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
											</div>
											<div class="card-footer-a">
												<ul class="card-info d-flex justify-content-around">
													<li>
														<h4 class="card-info-title">Area</h4>
														<span>
															340m
															<sup>2</sup>
														</span>
													</li>
													<li>
														<h4 class="card-info-title">Beds</h4>
														<span>2</span>
													</li>
													<li>
														<h4 class="card-info-title">Baths</h4>
														<span>4</span>
													</li>
													<li>
														<h4 class="card-info-title">Garages</h4>
														<span>1</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div class="row">
          <div class="col-sm-12">
            <nav class="pagination-a">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">
                    <span class="bi bi-chevron-left"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item next">
                  <a class="page-link" href="#">
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
					</div>
				</section>
			</main>
		</>
	)
}
