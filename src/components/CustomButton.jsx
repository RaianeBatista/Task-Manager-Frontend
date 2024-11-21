import './CutomButton.scss';

const CustomButton = ({ onClick, children }) => {
  <div className='custom-button-container' conClick={onClick}>
    {children}
  </div>;
};

export default CustomButton;
