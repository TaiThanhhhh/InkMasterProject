import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        setError(null);
        // Không cần token, lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem('isAuthenticated', 'true');  // Đặt trạng thái đã đăng nhập
        navigate('/dashboard'); // Chuyển hướng đến trang dashboard khi đăng nhập thành công
      } else {
        setError(data.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra, vui lòng thử lại.');
    }
  };

  return (
    <div className="login-dark">
      <form onSubmit={handleSubmit}>
        <div className="illustration">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <h2 className="login-title">Login Form</h2>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a href="#" className="forgot">
          Forgot your email or password?
        </a>
      </form>
    </div>
  );
};

export default Login;
