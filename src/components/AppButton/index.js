import '../AppButton/style.css';

const AppButton = (props) => {
  const getClassNames = () =>
    `h3 text-white bg-orange app-button ${
      props.className ? props.className : ''
    }`;

  return (
    <button className={getClassNames()} type='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default AppButton;