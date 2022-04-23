import React from "react";
import "./displaymovie.css";
import { getDocs, collection, doc } from "firebase/firestore";
import { app, db } from "../firebase";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../features/store/Movies";

function Displaymovies() {
  const obj = useSelector((state) => state);
  const dispatch = useDispatch();

  const collectionRef = collection(db, "movies");
  React.useEffect(() => {
    getDocs(collectionRef).then((resp) => {
      let moviesFetched = resp.docs.map((item) => {
        return { id: item.id, ...item.data() };
      });
      dispatch({ type: "add", payload: moviesFetched });
    });
  }, []);

 

  return (
    <>
      <div className="containerforimg">
        { obj.movies.map((item)=>{return <div className="categorydiv">
          <div className="catogory">
            <h1>{item.cat}</h1>
          </div>
          <div className="displayMovies">
            {obj.movies &&
              obj.movies.map((item) => {
                return (
                  <Link to={`/details/${item.id}`}>
                    <div className="card">
                      <img src={item.image} alt="disney"></img>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div />
        </div>})}
      </div>
    </>
  );
}

export default Displaymovies;
