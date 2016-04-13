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
                    <meta charSet="UTF-8"/>
                    <title>Todo</title>

                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
                          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous"/>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
                            integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossOrigin="anonymous"></script>
                </head>
                <body>
                    <div id="app"></div>
                    <script src="bundle.js"></script>
                 </body>
            </html>);
    }
}

export default Index;