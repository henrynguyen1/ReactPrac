import React from 'react';



class Footer extends React.Component{
    render(){
        return <p>
            Copyright 2020-{new Date().getFullYear}
        </p>
    }

}

export default Footer;