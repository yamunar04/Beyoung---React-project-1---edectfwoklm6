export const projectId = "edectfwoklm6";
export const apiUrl = "https://academics.newtonschool.co/api/v1/";

export const getAuthHeaderConfig = ()=>{
    const token = JSON.parse(localStorage.getItem("authToken"));
    console.log(token)
    if(token){
        return{
            headers:{
                Authorization: `Bearer ${token}`,
                projectID: projectId,
            },
        };
    }else{
        return{
            error:"user not logged in"
        }
    }
}
