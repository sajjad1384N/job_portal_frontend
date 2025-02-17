import { setSingleCompany } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://backend-api-job-portal.onrender.com/api/v1/company/getcompany/${id}`, {
                    headers: {
                        "Content-Type": "Application/json",
                       
                    },
                    withCredentials:true,
                    
                }
                );
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log("Error occured while fetching company details", error);
            }
        };
        fetchCompanyDetails();
    }, [id, dispatch])
};
export default useGetCompanyById;
