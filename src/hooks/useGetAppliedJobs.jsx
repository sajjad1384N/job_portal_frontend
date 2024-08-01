import { setAllAppliedJobs } from '@/redux/applicationSlice';
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('http://localhost:8000/api/v1/application/get',{
                    headers: {
                        "Content-Type": "Application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjlkZGE0ZDYxNjRlNDFlOWZjZjMzMzkiLCJpYXQiOjE3MjI1MDc1NDAsImV4cCI6MTcyMzM3MTU0MH0.evhUngIbI7_ZQUouZOOJLzvAlupI6O_EUSacml8cvws"
                    },
                    withCredentials:true,
                });
                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    }, [])
}

export default useGetAppliedJobs