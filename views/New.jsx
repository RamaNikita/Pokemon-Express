const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create New Pokemon</h1>
        <form action="/pokemon/create" method="POST">
          <input type="text" name="name" />
          <br />
        </form>
      </div>
    );
  }
}
module.exports = New;
