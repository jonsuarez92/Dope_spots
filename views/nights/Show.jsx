const React = require('react');
const DefaultLayout = require('../layouts/Default.jsx');

class Show extends React.Component{
    render(){
        const {night} = this.props;
        return(
            <DefaultLayout>
      <div>
        <article>
          <h2>
            {night.name} 
          </h2>
          <h3>{night.uBar}</h3>
          <a href={`/nights/${ night._id }/Edit`}><button>Edit</button></a>
          <form action={`/nights/${ night._id }?_method=DELETE`} method="POST">
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