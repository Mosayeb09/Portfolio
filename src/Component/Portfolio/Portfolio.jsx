import './Portfolio.css'
import program_1 from '../../../public/Portfolio_assets/code_1.png'
import program_2 from '../../../public/Portfolio_assets/code_2.png'
import program_3 from '../../../public/Portfolio_assets/code_3.png'
import { HiViewGridAdd } from "react-icons/hi";

const Portfolio = () => {
    return (
       <div className='project_title'>
        <h3>Latest <span className='project_heading'>Projects</span></h3>
         <div className='programs'>
            
            <div className='program'>
                <img src={program_1} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_1} alt="" /> */}
                    <h3><HiViewGridAdd /></h3>
                    <p>Web Design</p>
                </div>

            </div>
            <div className='program'>
                <img src={program_2} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_2} alt="" /> */}
                    <h3><HiViewGridAdd /></h3>
                    <p>Web Design</p>
                </div>

            </div>
            <div className='program'>
                <img src={program_3} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h3><HiViewGridAdd /></h3>
                    <p>Web Design</p>
                </div>

            </div>
            
        </div>
       </div>
    );
};

export default Portfolio;