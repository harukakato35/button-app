import React from "react"; 
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonA = () => {
  const dispatch = useDispatch();
  const click = useSelector(state => state.click.click);
  
  return (
  <div>
  <div>
    <Link to="/components/new">Button Bに戻る</Link>
    <Button variant="contained" color="secondary"　onClick={()=> {dispatch({ type: "CLICK_A" })}}>
        Button A 
    </Button>    
    
  </div>
  {click}
  </div>
  );
};



export default ButtonA;