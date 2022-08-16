import logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="navbar bg-light mb-4 p-o">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>ProjectMGMT</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
