var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Mehul Patel',
  username: 'Mayho',
  image: 'https://avatars1.githubusercontent.com/u/3915230?v=3&s=460',
  lorem: 'Cupcake ipsum dolor sit amet marshmallow apple pie candy cotton candy. Tootsie roll sugar plum icing. Brownie sweet cotton candy sweet roll icing brownie. Liquorice gummi bears jelly sesame snaps macaroon. Apple pie donut cookie jelly I love apple pie tootsie roll jelly-o lemon drops. Gummies gummi bears croissant topping jelly-o chupa chups I love icing. Cake pastry sweet muffin soufflé marshmallow chupa chups powder. Candy canes brownie sweet cupcake marshmallow ice cream bear claw croissant. Toffee pastry jelly beans. Sweet roll chocolate cake gummi bears. Carrot cake toffee bear claw sugar plum lollipop caramels. Lemon drops topping I love. Cake chocolate cake tart jujubes danish. Croissant sweet sweet roll powder I love sugar plum chocolate bar.'
};

var ProfilePic = React.createClass({
  render: function() {
    return <img className="round" src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var GitHubLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          GitHub
        </a>
      </div>
    );
  }
});

var TwitterLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.twitter.com/itsmayho'}>
          Twitter
        </a>
      </div>
    );
  }
});

var LinkedInLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://linkedin.com/in/itsmayho'}>
          LinkedIn
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <h3>{this.props.name}</h3>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div style={{margin: 20, padding: 20}}>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <TwitterLink username={this.props.user.username} />
        <LinkedInLink username={this.props.user.username} />
        <GitHubLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
