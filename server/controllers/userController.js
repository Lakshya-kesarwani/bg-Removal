import {Webhook} from 'svix'
import userModel from '../models/userModel.js'


// API Controller Function to manage clerk user with database
//url/api/user/webhooks
console.log("I am inside controller")
const clerkWebhooks = async (req,res) => {
    console.log("Request Body:", req.body);
    try {
        console.log("Headers:", req.headers);

        // Create a Svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        console.log("Webhook Secret:", process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers['svix-id'],
            "svix-timestamp":req.headers['svix-timestamp'],
            "svix-signature":req.headers['svix-signature']
        })

        const [data,type] = req.body;
        console.log(data)
        switch (type) {
            case "user.created":{
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                }
                await userModel.create(userData)
                res.json({})
                    break;
                }
                case "user.updated":{
                    const userData = {
                        email: data.email_addresses[0] .email_address,
                        photo: data.image_url,
                        firstName: data.first_name,
                        lastName: data.last_name,
                    }
                    await userModel.findOneAndUpdate({clerkId: data.id},userData)
                    res.json({})
                    break;
                }
                case "user.deleted":{
                    await userModel.findOneAndDelete({clerkId: data.id})
                    res.json({})
                    break;
                }
        
            default:
                break;
        }



    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}



export  {clerkWebhooks}