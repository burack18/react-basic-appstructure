import React, { useLayoutEffect } from 'react'
import { Outlet, useNavigate, useResolvedPath, useRoutes } from 'react-router-dom'
import { isUserAuthorized } from '../../service/authorization'

export const Auth = () => {
    const navigate=useNavigate();
    const path=useResolvedPath();
    console.log(path.pathname);
    useLayoutEffect(() => {
        const isLogin=isUserAuthorized();
        !isLogin&&navigate('/login');
    }, [])
    return (
        <Outlet/>
        );
}
