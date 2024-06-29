import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({ children }) => {
 const username=localStorage.getItem("username");


  const location= useLocation();
  console.log("private location: ", location);

  //children is edit book component

  if (!username) {
    return <Navigate to="/login" state={location.pathname}  replace= {true }/>;
  }
  return (
    <div>
      {/* Create private route */}
      {children}
    </div>
  );
};