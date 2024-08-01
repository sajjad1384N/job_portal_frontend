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
                const res = await axios.get(`http://localhost:8000/api/v1/company/getcompany/${id}`, {
                    headers: {
                        "Content-Type": "Application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjlkZGE0ZDYxNjRlNDFlOWZjZjMzMzkiLCJpYXQiOjE3MjI1MDc1NDAsImV4cCI6MTcyMzM3MTU0MH0.evhUngIbI7_ZQUouZOOJLzvAlupI6O_EUSacml8cvws"
                    }
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