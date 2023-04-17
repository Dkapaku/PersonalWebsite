const Portfolio = () => {
    return (
      <div className="portfolioContainer">
        <div className="singleItem fade-in">
          <a href="https://thevinylfrontier.netlify.app/" target="_blank">
            <img
              className="portfolioImage fade-in"
              src="https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </a>
          <h1>The Vinyl Frontier</h1>
          <p>
            -E-commerce website with user-friendly UX/UI and functioning backend
            using Express https://github.com/The-Vinyl-Fontiers/TheVinylFrontier
          </p>
        </div>
        <div className="singleItem fade-in">
          <a href="https://clever-unicorn-b455c0.netlify.app/" target="_blank">
            <img
              className="portfolioImage fade-in"
              src="https://i0.wp.com/www.thegamegal.com/wp-content/uploads/2018/08/ultimate-tic-tac-toe12-01.png?w=680&ssl=1"
            />
          </a>
          <h1>Tic-Tac-Toe</h1>
          <p>
            -simple "Tic-Tac-Toe" game engineered using basic vanilla JavaScript
          </p>
        </div>
      </div>
    );
  };
  
export default Portfolio