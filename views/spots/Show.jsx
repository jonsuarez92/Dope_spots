const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Show extends React.Component{
    render(){
        const {spot} = this.props;
        return(
            <DefaultLayout>
      <div>
        <article>
          <h2>
            {spot.name} 
          </h2>
          <a href={spot.url}> Goto Resturant</a>
          <a href={`/spots/${ spot._id }/Edit`}><button>Edit</button></a>
          <form action={`/spots/${ spot._id }?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" />
          </form>
          <a href="/spots/"><button>Back to Resturant</button></a>
          <a href="/nights/"><button>Back to Bars</button></a>
        </article>
      </div>
    </DefaultLayout>
        )
    }
}

module.exports = Show;