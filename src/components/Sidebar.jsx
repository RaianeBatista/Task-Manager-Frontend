import './Sidebar.scss';

import CustomButton from './CustomButton'
import logo from '../assets/images/logo.png'


const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Satck Club" />
            </div>

            <div className="sign-out">
                <CustomButton>
                    Sair
                </CustomButton>
            </div>
</div>
    )
}

export default Sidebar;