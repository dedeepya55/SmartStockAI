import { useState } from "react";
import styles from "./Login.module.css"; // use module
import LoginImage from "../../assets/LoginImage.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <img src={LoginImage} alt="SmartVision AI" className={styles.backgroundImage} />
      <div className={styles.pattern}></div>

      <div className={styles.rightSide}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>SMARTVISION AI</h1>
          <h2 className={styles.subtitle}>Login</h2>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className={`${styles.eyeIcon} ${showPassword ? styles.eyeIconActive : ""}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                <div className={styles.eye}>
                  <div className={styles.pupil}></div>
                </div>
                <div className={styles.slash}></div>
              </span>
            </div>
          </div>

          <div className={styles.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button className={styles.forgot}>Forgot password?</button>
          </div>

          <button className={styles.loginBtn}>Login</button>
          <p className={styles.footerText}>Smart. Fast. Intelligent.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
