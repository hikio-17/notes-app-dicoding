import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUser } from 'react-icons/fi';
import LocaleContext from '../context/LocalContext';

function Navbar ({ logOut }) {
  const { authedUser, language } = React.useContext(LocaleContext);

  return (
    <>
      {authedUser && <nav>
      <ul>
        <li>
          <Link to='/'>{language === 'id' ? 'Beranda' : 'Home'}</Link>
        </li>
        <li>
          <Link to='/notes/new'>{language === 'id' ? 'Tambah' : 'Add'}</Link>
        </li>
        <li>
          <Link to='/archives'>{language === 'id' ? 'Arsip' : 'Archive'}</Link>
        </li>
      </ul>

      <div>
        <h2><FiUser />Hello,{authedUser?.name}</h2>
        <button onClick={logOut}>Logout {" "}<FiLogOut /></button>
      </div>
    </nav>}
    </>
  )
}

Navbar.propTypes = {
  logOut: PropTypes.func.isRequired,
}

export default Navbar
