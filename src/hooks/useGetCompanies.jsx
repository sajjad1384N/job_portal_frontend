import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetCompanies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get("http://localhost:8000/api/v1/company/getcompany", {
                    headers: {
                        "Content-Type": "Application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjlkZGE0ZDYxNjRlNDFlOWZjZjMzMzkiLCJpYXQiOjE3MjI1MDc1NDAsImV4cCI6MTcyMzM3MTU0MH0.evhUngIbI7_ZQUouZOOJLzvAlupI6O_EUSacml8cvws"
                    },
                    withCredentials:true,
                });

                dispatch(setCompanies(res.data.companies));
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompany();
    }, []);
};
export default useGetCompanies;