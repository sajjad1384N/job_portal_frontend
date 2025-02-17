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
                const res = await axios.get('https://backend-api-job-portal.onrender.com/api/v1/application/get',{
                    headers: {
                        "Content-Type": "Application/json",
                        
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
