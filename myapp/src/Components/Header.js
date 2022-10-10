import logo from "../Images/UA-Logo.png";

const Header = () => {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
    <img src={logo} alt="logo" style={{
            height: 50,
            width: 50
          }}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-left" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/"><b>Home</b></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href="/news"><b>News</b></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href="/addition"><b>Addition</b></a>
        </li>
        

      </ul>
    </div>
  </div>
</nav>
      
  );
};

export default Header;
