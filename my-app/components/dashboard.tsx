import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const {user}=useAuth()
    const router = useRouter()
    useEffect(() => {
     if (!user) {
        router.push("/login")
     }
    }, [])
    
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard