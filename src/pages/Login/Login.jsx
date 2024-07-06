// import React, { useEffect } from "react";
// import { useGetInputValue } from "../../components/hook/useGetValue";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setToken } from "../../components/context/Slice/AuthSlice";

// const initialState = {
//   username: "",
//   password: "",
// };

// const Login = () => {
//   let dispatch = useDispatch();
//   let navigate = useNavigate();

//   let isLogin = useSelector((state) => state.auth.token);

//   useEffect(() => {
//     if (isLogin == "fake-token") {
//       navigate("/admin");
//     }
//   }, []);

//   const { formData, handleChange, setFormData } =
//     useGetInputValue(initialState);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setFormData(initialState);
//     if (formData.username === "john32" && formData.password === "87654321") {
//       dispatch(setToken("fake-token"));
//       navigate("/admin");
//     } else {
//       alert("User Name or Password is incorrect");
//     }
//   };

//   return (
//     <div>
//       <section className="login">
//         <div className="container">
//           <div className="login__style">
//             <img src="" alt="loginImg" />
//             <form onSubmit={handleLogin} className="login__content">
//               <h1 className="login__content__title">Login</h1>
//               <input
//                 type="text"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Username"
//                 className="login__content__input"
//                 name="username"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="login__content__input"
//                 name="password"
//               />
//               <button>Login</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;
