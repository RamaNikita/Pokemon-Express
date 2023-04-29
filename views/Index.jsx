const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  // backgroundColor: "#125478",
  // height: "100px",
};
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}
module.exports = Index;
