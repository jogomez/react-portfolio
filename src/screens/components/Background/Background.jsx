import React from 'react';
import "./Background.css";
import { ReactComponent as  Api }  from "./svg/api-svgrepo-com.svg";
import { ReactComponent as  Css }  from "./svg/css3-shiled-svgrepo-com.svg";
import { ReactComponent as  Code }  from "./svg/code-svgrepo-com.svg";
import { ReactComponent as  Debug }  from "./svg/debug-script-svgrepo-com.svg";
import { ReactComponent as  Express }  from "./svg/express-svgrepo-com.svg";
import { ReactComponent as  Handlebars }  from "./svg/bicycle-bike-svgrepo-com.svg";
import { ReactComponent as  Heroku }  from "./svg/heroku-svgrepo-com.svg";
import { ReactComponent as  Html }  from "./svg/html5-svgrepo-com.svg";
import { ReactComponent as  Npm }  from "./svg/npm-svgrepo-com.svg";
import { ReactComponent as  Json }  from "./svg/json-file-svgrepo-com.svg";
import { ReactComponent as  Mongodb }  from "./svg/mongodb-svgrepo-com.svg";
import { ReactComponent as  Mongoose }  from "./svg/mongoose-svgrepo-com.svg";
import { ReactComponent as  Mysql }  from "./svg/mysql-svgrepo-com.svg";
import { ReactComponent as  NodeJs }  from "./svg/node-js-svgrepo-com.svg";
import { ReactComponent as  Postman }  from "./svg/postman-svgrepo-com.svg";
import { ReactComponent as  ReactSVG }  from "./svg/react-svgrepo-com.svg";
import { ReactComponent as  Webpack }  from "./svg/webpack-svgrepo-com.svg";
import { ReactComponent as  Sql }  from "./svg/sql-file-format-symbol-svgrepo-com.svg";

function Background({children}) {
    let arr = [];
    let rows = 16;

    for (let i = 0; i < rows; i++){
        arr.push(i)
    }

    const layers = arr.map((i) => {
        return (
            <div key={i} className="animated-row">
                <div>
                    <Api />
                    <Debug />
                    <Code />
                    <Css />
                    <Express />
                    <Handlebars />
                    <Heroku />
                    <Html />
                    <Npm />
                    <Json />
                    <Mongodb />
                    <Mongoose />
                    <Mysql />
                    <NodeJs />
                    <Postman />
                    <ReactSVG />
                    <Webpack />
                    <Sql />
                </div>
                <div>
                    <Api />
                    <Debug />
                    <Code />
                    <Css />
                    <Express />
                    <Handlebars />
                    <Heroku />
                    <Html />
                    <Npm />
                    <Json />
                    <Mongodb />
                    <Mongoose />
                    <Mysql />
                    <NodeJs />
                    <Postman />
                    <ReactSVG />
                    <Webpack />
                    <Sql />
                </div>
            </div>
        )
    })

    return(
        <section className='animated-section'>
            {layers}
            {children}
        </section>
    )
}

export default Background;