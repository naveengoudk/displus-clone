import React from "react";
import Header from "./Header";
import "./details.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Details() {
 
  const {id} = useParams()
  const moviesList = useSelector(state=>state.movies)
  console.log(moviesList);
  let movie={} 
  moviesList.map((item)=>{
    if (item.id===id){
      movie={...item}
    }
  })
  console.log(movie);
  console.log(id);
  const styles={
    background:`url(${movie.image})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center"
  }
  
  return (
    <>
      <div style={styles} className="container"></div>
        <div className="content">
          <div className="details">
            <h1 className="moviename">{movie.name}</h1>
            <div className="moviedetails">
             <p>{movie.text}</p>
            </div>
            <div className="aboutmovie">
              this show is all about marvel superheros fighting dark evil to
              bring the justice
            </div>
            <div className="buttons">
              <div className="watchbutton">
                <button className="watchbtn">
                  <PlayArrowIcon className="playicon"></PlayArrowIcon> Watch
                </button>
                <button className="playtrailer">
                  <PlayArrowIcon className="playicon"></PlayArrowIcon> Play Trailer
                </button>

                <div className="innerdiv">
                    <div className="watchlist"><AddIcon></AddIcon> </div>
                    <div className="share"><PeopleAltIcon></PeopleAltIcon> </div>
                    </div>
                </div>
          
            </div>
          </div>
        </div>
   
    </>
  );
}
