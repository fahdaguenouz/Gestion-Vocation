import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from "../context/AuthProvider";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../assets/styles/login.css';
import 'bootstrap/dist/css/bootstrap.css';



const Login = () => {


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { login, setAuthenticated, setToken } = Usercontext()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg('');
    console.log('Attempting login with:', { email, password });

    try {
      const response = login(email, password);
      console.log('rrr' + response);
      const { status, data } = response;
      if (status === 200 || status === 204) {
        setAuthenticated(true);
        if (data.token) {
          setToken(data.token);
        }
        navigate('/dashboard');
      }
    } catch (error) {
      console.log("..." + { error });
      console.log(error.response?.status);
      const status = error.response?.status;
      console.log(error);
      if (status === 401) {
        setErrMsg('Non autorisé. Vérifiez vos identifiants "Email ou Password"');
      } else if (status === 400) {
        setErrMsg('Adresse email ou mot de passe manquant');
      } else if (!error.response) {
        setErrMsg('Aucune réponse du serveur');
      } else {
        setErrMsg('Échec de la connexion. Veuillez réessayer');
      }
    }
  }

  return (
    <>
      
      <div className="container">
        <div className="col-md-4 col-md-offset-3 col-xs-12">
          <div className="blmd-wrapp">
            <div className="blmd-continer">
              <form onSubmit={handleSubmit} className="clearfix" id="login-form">
                <h1>Login</h1>
                <div className="col-md-12">

                  <div className="input-group blmd-form">
                    <div className="blmd-line inp">
                      <input name="username"  type="email"
                        className="form-control form-control-lg bg-light fs-6"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email" />
                      
                    </div>
                  </div>
                  <div className="input-group blmd-form">
                    <div className="blmd-line inp">
                      <input name="password"  type="password"
                        className="form-control form-control-lg bg-light fs-6"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password" />
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button type="button" className="btn btn-blmd ripple-effect btn-success btn-lg btn-block">Login</button>
                  {errMsg && <div className='Error'>{errMsg}</div>}
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;
