const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Index extends React.Component{
    render(){
        const {night} = this.props;
        return(
            <DefaultLayout>
                <div>
                    {
                     night.map((night) => (
                     <article>
                     <a href={`/nights/${night._id }`}>
                      <h2>
                         {night.name} 
                     </h2>
                    </a>
                   </article>
                     ))
                      }
                 </div>
                 <a href="/nights/New"><button>Put Your Favorite nightlife spot</button></a>
            </DefaultLayout>
        )
    }
}

module.exports = Index;