const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Index extends React.Component{
    render(){
        const {spots} = this.props;
        return(
            <DefaultLayout>
                <div>
                    {
                     spots.map((spot) => (
                     <article>
                     <a href={`/spots/${spot._id }`}>
                      <h2>
                         {spot.name}  
                     </h2>
                    </a>
                   </article>
                     ))
                      }
                 </div>
             
            </DefaultLayout>
        )
    }
}

module.exports = Index;