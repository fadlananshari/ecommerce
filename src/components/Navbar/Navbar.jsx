import NavbarMenuList from './NavbarMenuList';
import NavbarIcons from './NavbarIcons';
import Logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white border ">
      <div className="container d-flex justify-content-between align-items-end">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Tanggap Banjir" className="logo-brand" height="30px" />
        </a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-end gap-4" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 mb-2 mb-lg-0">
            {NavbarMenuList.map((item, index) => {
              return (
                <li className={item.cName[0]} key={index}>
                  <a className={item.cName[1]} aria-current="page" href={item.url}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className=" gap-4 mb-2 mb-lg-0 d-none d-sm-flex list-unstyled">
            {NavbarIcons.map((item, index) => {
              return (
                <li className={item.cName[0]} key={index}>
                  <a className={item.cName[1]} aria-current="page" href={item.url}>
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
