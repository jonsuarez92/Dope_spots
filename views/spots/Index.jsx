const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Index extends React.Component{
    render(){
        const {spots} = this.props;
        return(
            <DefaultLayout>
                 <div class="outterWrapper">
                    
                    {
                     spots.map((spots) => (
                         
                     <article class="entryWrapper">
                     <a href={`/spots/${spots._id }`}>
                      <div class="card" style={{width:18+"rem"}}>
                    <img class="card-img-top" src={`${spots.img}`}  alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{spots.name}</h5>
                        <p class="card-text"> {spots.details}</p>
                        <a href="#" class="btn btn-primary">Check This Out</a>
                    </div> 
                    </div>
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