import { axiosClient } from "../../api/axios";

 const UserApi={
    
    login:async(email,password)=>{
       return   axiosClient.post('/login', { email, password });
    },
    logout: async () => {
        return await axiosClient.post('/logout')
      },
    getUser:async()=>{
        return await axiosClient.get('/user')
           
    }
}
export default UserApi;