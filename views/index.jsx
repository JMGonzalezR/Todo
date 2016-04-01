/**
 * @author Juan González <juanml93@gmail.com>  on 4/1/2016.
 */

'use strict';

import React from 'react';

class Index extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <title>Todo</title>
                </head>
                <body>
                    <div id="app"></div>
                    <script src="bundle.js"></script>
                 </body>
            </html>);
    }
}

export default Index;