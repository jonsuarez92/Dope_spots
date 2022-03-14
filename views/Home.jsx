const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Home extends React.Component{

    render(){
        const {spot} = this.props;
        return(
            <DefaultLayout>
                <div>
                    
                </div>
    
    </DefaultLayout>
        )
    }
}


module.exports = Home;