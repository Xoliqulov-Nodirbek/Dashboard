/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import useToken from "../../Hook/useToken";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useToken();

  const handleClick = (e) => {
    e.preventDefault();

    const postRequest = async () => {
      axios
        .post("https://intex-shop-production.up.railway.app/api/admins/login", {
          username: name,
          password: password,
        })
        .then((res) => {
          if (res?.data?.token) {
            setToken(res?.data?.token);
          }
        });
    };
    postRequest();
    setName("");
    setPassword("");
  };

  return (
    <section>
      <div className="fixed inset-0 flex justify-center items-center">
        <div>
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-3xl mb-5">Login</h1>
            <form className="flex flex-col text-center" onSubmit={handleClick}>
              <input
                className="border outline-none px-3 py-1 mb-3"
                type="text"
                value={name}
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border outline-none px-3 py-1 mb-5"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="border w-fit mx-auto px-10 py-1 rounded-md bg-sky-700 text-white mb-10"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="font-semibold text-xl">Or login using</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
