export const SendError = (res, status, success, message, error) => {
    if (error) {

        // Wrong Mongodb Id Error 

        if (error.name === "CastError") {
            let message = `${error.value} not Found . Invalid ${error.path}`
            return res.status(400).json({ error: message, success: false })

        }
        else if (error.name === "TokenExpiredError") {
            const message = `Json Web Token is Expired, try again`;
            return res.status(400).json({ error: message, success: false })

        }

        else if (error.name === "JsonWebTokenError") {
            const message = `Json Web Token is invalid, try again`;
            return res.status(400).json({ error: message, success: false })

        }
        else if (error.code) {
            const message = `Deplicate key Error`;
            return res.status(400).json({ error: message, success: false })
        }

        else {
            return res.status(status).json({ error: error.message, success })
        }



    }
    else {

        return res.status(status).json({ error: message, success })
    }

}