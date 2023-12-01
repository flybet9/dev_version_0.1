import UserModel from "../models/User.js";


export const adminLogin = async (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    if(request.body){
      const {username, password} = request.body;
      UserModel.findOne({username:username}).
      then(user =>{
        if(user.password === password && user?.admin_access){
          return response.status(200).send({login_status:true, message:"Login success", user});
        }
        return response.status(401).send({login_status:false, message:"Invalid password"});
      }).
      catch(error =>{
        return response.status(500).send({login_status:false, message:"Login unsuccessful"});
      })
    }
  };

  export const userLogin = async (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    if(request.body){
      const {username, password} = request.body;
      UserModel.findOne({username:username}).
      then(user =>{
        if(user.password === password &&!user?.admin_access){
          return response.status(200).send({login_status:true, message:"Login success", user});
        }
        return response.status(401).send({login_status:false, message:"Invalid password"});
      }).
      catch(error =>{
        return response.status(500).send({login_status:false, message:"Login unsuccessful"});
      })
    }
  }

  export const userByUsername = (request, response) => {
    const username = request.params.username;
    UserModel.findOne({username:username}).
    then(async(user) =>{
          if(user.session === true){
            return response.status(200).send({login_status:true, message:"Login success", user});
          }
      }).
      catch(error =>{
        return response.status(500).send({login_status:false, message:"Login unsuccessful", user});
      })
  }
  
