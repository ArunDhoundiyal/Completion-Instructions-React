const element = (
  <div className="bg-container">
    <h1 className="heading-color">Congratulations</h1>
    <div className="card-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image-size"
        />
      </div>
      <div className="text-style">
        <h1 className="person-name">Kiran V</h1>
        <p className="college-name">
          Vishnu Institute of Computer Education and Technology. Bhimavaram
        </p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image-size"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
