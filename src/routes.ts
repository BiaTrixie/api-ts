import {Router, Request, Response} from 'express';
import { UserController } from './controllers/UserController';


export const router = Router()
const userController = new UserController()

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.delete('/user', (request: Request, response: Response) => {
    const user = request.body
    console.log(user)
    return response.status(200).json({message: 'User deleted'})
})