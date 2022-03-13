const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Index extends React.Component{
    render(){
        const {night} = this.props;
        return(
            <DefaultLayout>
                <div class="outterWrapper">
                    
                    {
                     night.map((night) => (
                         
                     <article class="entryWrapper">
                     <a href={`/nights/${night._id }`}>
                      <div class="card" style={{width:18+"rem"}}>
  <img class="card-img-top" src={`${night.img}`}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{night.name}</h5>
    <p class="card-text"> {night.details}</p>
    <a href="#" class="btn btn-primary">Check This Out</a>
  </div> 
</div>
</a>
                         
                      
                    
                   </article>
                     ))
                      }
                 </div>
                 <a href="/nights/New"><button>Enter Your Favorite nightlife spot</button></a>
                 <a href="/spots/New"><button>Enter Your Favorite Resturant</button></a>
            </DefaultLayout>
        )
    }
}

module.exports = Index;