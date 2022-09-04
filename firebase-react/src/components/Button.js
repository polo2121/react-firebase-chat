import React from "react";
class Button extends React.Component {
  //   let {name} = this.props;
  render() {
    const { action, name } = this.props;
    return <button onClick={action}>Click {name}</button>;
  }
}
export default Button;
