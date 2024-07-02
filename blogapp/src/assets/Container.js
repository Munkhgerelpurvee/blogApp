export const Container = (props) => {
    return (
      <div className={`px-20 py-24 ${props.background}`}>{props.children}</div>
    );
  };