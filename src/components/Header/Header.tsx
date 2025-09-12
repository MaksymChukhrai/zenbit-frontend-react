import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { logout } from '../../store/authSlice';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // Проверяем, находимся ли мы на auth страницах
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Logo показываем всегда */}
        <Link to="/" className={styles.logo}>
          <span className={styles.zenPart}>ZEN</span>
          <span className={styles.bitPart}>BIT</span>
        </Link>
        
        {/* Кнопки показываем только НЕ на auth страницах */}
        {!isAuthPage && (
          <div className={styles.authButtons}>
            {isAuthenticated ? (
              <>
                <span className={styles.userName}>
                  Hello, {user?.firstName || user?.email}
                </span>
                <button 
                  className={styles.logoutBtn}
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginBtn}>
                  Log In
                </Link>
                <Link to="/register" className={styles.signupBtn}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;