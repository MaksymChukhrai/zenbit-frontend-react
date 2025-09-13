import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { registerUser, clearError } from '../../store/authSlice';
import { RegisterData } from '../../types';
import styles from './Register.module.scss';

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);

  // Перенаправляем, если пользователь уже авторизован
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Очищаем ошибку при размонтировании
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await dispatch(registerUser(formData)).unwrap();
      navigate('/');
    } catch (error) {
      // Ошибка обрабатывается в Redux
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.registerContainer}>
        <div className={styles.registerForm}>
          <h1 className={styles.title}>Sign Up</h1>
          
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName" className={styles.label}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="John"
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="lastName" className={styles.label}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your password (min 6 characters)"
                minLength={6}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitButton}`}
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
          
          <div className={styles.loginLink}>
            Already have an account?{' '}
            <Link to="/login" className={styles.link}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

