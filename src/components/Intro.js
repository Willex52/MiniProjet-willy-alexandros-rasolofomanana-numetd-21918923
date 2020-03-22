import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import metallica from "../data/mettalica";
import TableInfosGroup from "./TableInfosGroup"

import "./Intro.css";

const Intro = () => {
  
  return (
      <div>
        <Card className="intro">
            <CardMedia
                className="intro-cover"
                image={metallica.picture.medium}
                title="Live from space album cover"
            />
            <div className="intro-details">
                <CardContent className="intro-content">
                    <Typography component="h2" variant="h2">
                        {metallica.name}
                        <TableInfosGroup groupInfos={metallica} />
                    </Typography>
                </CardContent>                
            </div>
        
        </Card>
        <h2>Description : </h2>
        <p>{metallica.abstract}</p>
        
    </div>
  );
};

export default Intro;
