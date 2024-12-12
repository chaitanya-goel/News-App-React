import React from 'react';
const Navbar = ({ setCategory, activeCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className='badge bg-light text-dark fs-4'>NEWS MAG</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {['technology', 'business', 'health', 'science', 'sports', 'entertainment'].map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className={`nav-link fs-6 fw-bold btn btn-primary ${activeCategory === category ? 'active' : ''}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCategory(category);
                  }}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;
