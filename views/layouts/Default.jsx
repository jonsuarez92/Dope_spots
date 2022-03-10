const React = require('react');



class DefaultLayout extends React.Component {
  render() {
      const {spots} = this.props;
    return (
        <html lang="en">
        <head>
        <meta charSet='UTF-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
                    <title>My  Website to find dope spots</title>
                    <link rel="stylesheet" href="/css/app.css"></link>
        </head>
        <body>
      <header>
     <h1> Dope Spots  </h1>
     </header>
     <main>
      {this.props.children}
     </main>
     <footer>

     </footer>
                
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;