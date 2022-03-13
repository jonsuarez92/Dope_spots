const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Index extends React.Component{
    render(){
        const {spots} = this.props;
        return(
            <DefaultLayout>
                <div >
                    {
                     spots.map((spot) => (
                     <article class="two">
                     <a href={`/spots/${spot._id }`}>
                      <h2>
                         {spot.name} 
                     </h2>
                    </a>
                   </article>
                     ))
                      }
                 </div>
                 <a href="/spots/New"><button>Enter Your Favorite Resturant</button></a>
                 <a href="/nights/New"><button>Enter Your Favorite nightlife spot</button></a>
            </DefaultLayout>
        )
    }
}

module.exports = Index;