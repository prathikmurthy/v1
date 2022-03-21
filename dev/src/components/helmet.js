import React from "react";
import {Helmet} from "react-helmet";
import "../images/pop.png"

export default class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Prathik Murthy</title>
                <link rel="preload" href="../resources/Inter Web/inter.css" as="style"></link>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

        </div>
    );
  }
};