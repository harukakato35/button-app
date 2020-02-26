import React from "react"; 
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonB = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.click.click);
  
  return (
  <div>
  <div>
    <Link to="/">Button Aに戻る</Link>
    <Button variant="contained" color="secondary"　onClick={()=> {dispatch({ type: "CLICK_B" })}}>
        Button B
    </Button>    
  </div>
  {count}
  </div>
  );
};



export default ButtonB;