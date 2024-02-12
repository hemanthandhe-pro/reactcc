const heading = React.createElement('h1', { id:'hello' }, 'hello');

const parent = React.createElement(
  'div',
  {},
  [React.createElement(
    'div',
   {},
    [React.createElement(
        'h1',
        {key:1},
        'hello react'
      ),React.createElement(
        'h2',
        {key:2},
        'hello react'
      )]
  ),React.createElement(
    'div',
   {},
    [React.createElement(
        'h1',
        {key:1},
        'hello react'
      ),React.createElement(
        'h2',
        {key:2},
        'hello react'
      )]
  )]
);

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
console.log(heading)