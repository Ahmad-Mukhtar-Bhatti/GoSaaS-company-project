import {MdDeleteForever} from 'react-icons/md';
import {BiEdit} from 'react-icons/bi';
import "./TopBox2.css";
import {RiRadioButtonLine} from 'react-icons/ri';

interface Props{
    title:string;
    date: string;
    text:string;
    bgimg?:string
}

const TopBox2 = (props: Props) => {
    return (
        <>
            <article className="card">
                <div className="thumb" style={{
                    backgroundImage: props.bgimg
                }}></div>

                <div className="infos">
                    <h2 className="title">{props.title}<span className="Radio"><RiRadioButtonLine className="TB-radio-button" /></span></h2>
                    <h3 className="date">{props.date}</h3>
                    {/* <h3 className="seats">the details</h3> */}
                    <p className="txt">
                        {props.text}
                    </p>
                    <h3 className="edit_options">Edit Options &emsp;&emsp;&emsp;&emsp;
                        <BiEdit className="TB-edit" />&emsp;
                        <MdDeleteForever className="TB-delete" />
                    </h3>

                </div>
            </article>
        </>
    );
}

export default TopBox2
