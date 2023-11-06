import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Services } from "../services";
import { Components } from "../components";

export function EmployeeListView(props) {
    let abortController = new AbortController();

    const { EmployeeService } = Services;

    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const loadEmployees = async (currentPage = page) => {
        setIsLoading(true);

        try {
            const employeeList = await EmployeeService.getAll(
                {page: currentPage}, abortController.signal);
            
            const employeesCopy = employees.map(employee => 
                ({...employee, user: employee.user}))
            setEmployees([...employeesCopy, 
                ...employeeList.employees.data]);

        } catch (error) {
            console.log(error);
        }finally{setIsLoading(false)}
    }

    const handleLoadMoreClick = e => {
        e.preventDefault();
        if (isLoading) return;

        setPage(page => page + 1);
    }

    const init = useCallback(async () => {
        try {
            const {employees} = await EmployeeService.getAll(
                {page: page}, abortController.signal);

            setEmployees(employees.data);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
    }, []);

    useEffect(() => {
      init();

      return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    useEffect(() => {
        if (page === 1) return;
        loadEmployees();
    },[page]);

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Mes employés</h6>
            </div>
            <Components.Loader isLoading={isLoading}>
                <div className="row">
                    <div className="col-12">
                        <div className="row row-sm">
                            {employees.map((employee, index) => {
                                if (!employee.user) return null;
                                return (
                                    <div className="col-sm-6 col-lg-3" key={index}>
                                        <Components.UserCard user={employee.user}/>
                                    </div>
                                )
                            })}
                        </div>
                        <span to="/" className="btn btn-light btn-block mg-t-20"
                        onClick={handleLoadMoreClick}>
                            {isLoading ? "Chargements.." : "Charger plus"}
                        </span>                
                    </div>
                </div>
            </Components.Loader> 
        </>
    )
}