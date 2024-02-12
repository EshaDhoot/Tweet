import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async(req, res) => {
    try {
        const response  = await userService.signUp({
            email: req.body.email,
             password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: 'Successfully created a new user'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'Something went wrong'
        });
    }
}