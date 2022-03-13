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
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
                    </head>
        <body>
      <header>
     <h1> Dope Spots  </h1>
     </header>
     <nav>
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
      <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
      <li class="nav-item"><a class="nav-link" href="#">WORK</a></li>
      <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
    </ul>
  </nav>
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