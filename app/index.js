var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Traplord',
  username: 'Mayho',
  image: 'https://avatars1.githubusercontent.com/u/3915230?v=3&s=460',
  lorem: 'Cupcake ipsum dolor sit amet marshmallow apple pie candy cotton candy. Tootsie roll sugar plum icing. Brownie sweet cotton candy sweet roll icing brownie. Liquorice gummi bears jelly sesame snaps macaroon. Apple pie donut cookie jelly I love apple pie tootsie roll jelly-o lemon drops. Gummies gummi bears croissant topping jelly-o chupa chups I love icing. Cake pastry sweet muffin soufflé marshmallow chupa chups powder. Candy canes brownie sweet cupcake marshmallow ice cream bear claw croissant. Toffee pastry jelly beans. Sweet roll chocolate cake gummi bears. Carrot cake toffee bear claw sugar plum lollipop caramels. Lemon drops topping I love. Cake chocolate cake tart jujubes danish. Croissant sweet sweet roll powder I love sugar plum chocolate bar.'
};

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
        <p>{this.props.user.lorem}</p>
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
