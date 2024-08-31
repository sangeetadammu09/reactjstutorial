import {Button,Card,CardActions,CardContent,Typography}from "@mui/material";
import React from 'react'

export default function TodoItem({todoItem,currentTodoItem }) {

    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor : "#e5e5e5b0"
        }}>
            <CardContent>
                <Typography variant="h5" color={"text.secondary"} >
                    {todoItem?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => currentTodoItem(todoItem?.id)}
                    sx={{
                        backgroundColor: "#000000",
                        color: "#fff",
                        opacity: "0.75",
                        "&:hover": {
                            backgroundColor: "#000000",
                            color: "#fff",
                            opacity: "1",
                        },
                    }}
                >
                    Details
                </Button>
            </CardActions>

        </Card>
        // <div>
        //    <p> {todoItem.id}. {todoItem.todo}</p>
        // </div>

    )
}
