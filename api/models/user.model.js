import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://th.bing.com/th/id/R.3acddd96809373e254a8e6a0b5939754?rik=CfHBzmOotm%2fhog&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Free-Download.png&ehk=Y4PdD7AE%2fHJpnZsPko97b8LANnHWtZJ1GIfmuNyuY2M%3d&risl=&pid=ImgRaw&r=0",


    },
}, 
{timestamps: true}
);

const User = mongoose.model('User',userSchema);

export default User;