import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './index.css'

export const InfoBox = ({title, cases, total, ...props}) => {
    return (
        <Card className="infoBox">
            <CardContent className="content" style={{ backgroundColor : props.backgroundColor}} >
                <h2 className="infoBox__title">{title}</h2>
                <h2 className="infoBox__cases">{cases}</h2>
                <h2 className="infoBox__cases">{total} total</h2>
            </CardContent>    
        </Card>
    )
}
