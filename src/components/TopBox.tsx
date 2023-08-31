import {MdDeleteForever} from 'react-icons/md';
import {BiEdit} from 'react-icons/bi';
import {RiRadioButtonLine} from 'react-icons/ri';
import "./TopBox.css";
// import img from "./images/gosaas.jpg";

interface Props{
    title:string;
    text:string;
}


const TopBox = (props: Props) => {

    // style="width: 18rem;"
  return (
    <>
    <div className="card">
    <div className="content">
      <div className="title">{props.title}</div>
      <div className="text">
        {props.text}
      </div>
    </div>
    <div className="icons-container">
      <div className="icon"><RiRadioButtonLine className="radio-button"/></div>
      <div className="icon"><BiEdit className="edit-button"/></div>
      <div className="icon"><MdDeleteForever className="del-button"/></div>
    </div>
  </div>
      
    </>
  )
}

export default TopBox

