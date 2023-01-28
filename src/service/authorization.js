export const isUserAuthorized=()=>{
    // const ob=localStorage.getItem('user');
    // console.log(JSON.parse(ob));
    const token=localStorage.getItem('token');
    return token!==null && token!=='';
}