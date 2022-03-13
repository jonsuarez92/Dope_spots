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
            {console.log("!!!", spot.img)}
          </h2>
          <a href={spot.url}>Check Resturant Out</a>
          <img class="showPic"src={`${spot.img}`} alt="" />
          
          <a href={`/spots/${ spot._id }/Edit`}><button>Edit</button></a>
          <form action={`/spots/${ spot._id }?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" />
          </form>
          <a href="/nights/"><button>Back to Bars</button></a>
          <a href="/spots/"><button>Back to Resturants</button></a>
        </article>
      </div>
    </DefaultLayout>
        )
    }
}

module.exports = Show;