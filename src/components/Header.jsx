import Logo from "../assets/img/argentBankLogo.png";

const Header = () => {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="#">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Header;
