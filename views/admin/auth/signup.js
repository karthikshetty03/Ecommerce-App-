module.exports = ({req}) => {
  return `
  <div>
  Your id is ${req.session.userId}
  <form method = "POST">
    <input name = "email" placeholder="email"/>
    <input name = "pass" placeholder="password"/>
    <input name = "passconf" placeholder="password confirmation"/>
    <button>Sign up</button>
    </form>
  <div>
  `;
};
