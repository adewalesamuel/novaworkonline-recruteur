import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Services } from "../services";
import { Components } from "../components";

export function UserQualifiedListView(props) {
    let abortController = new AbortController();
    const { JobTitleService, UserService } = Services;

    const [searchParams, setSearchParams] = useSearchParams();

    const [job_titles, setJob_titles] = useState([]);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(searchParams.get('page') ?? 1);
    const [isLoading, setIsLoading] = useState(false);

    const loadUsers = async (can_append = false) => {
        setIsLoading(true);

        try {
            const userList = await UserService.getQualified(
                {page: page, job_title_id : searchParams.get('job_title_id')}, 
                abortController.signal);
            
            if (can_append) {
                const usersCopy = users.map(user => 
                    ({...user, job_title: user.job_title}))
                setUsers([...usersCopy, ...userList.users.data]);
            } else {
                setUsers(userList.users.data);
            }
        } catch (error) {
            console.log(error);
        }finally{setIsLoading(false)}
    }

    const init = useCallback(async () => {
        try {
            const [job_titlesRes, usersRes] = await Promise.allSettled([
                JobTitleService.getAll(abortController.signal),
                UserService.getQualified({page: page, job_title_id: 
                    searchParams.get('job_title_id')}, abortController.signal)
            ]);

            setJob_titles(job_titlesRes.value.job_titles);
            setUsers(usersRes.value.users.data);
        } catch (error) {
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
        loadUsers(false);
    },[searchParams.get('job_title_id')]);

    useEffect(() => {
        loadUsers(true);
    },[page]);

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Candidats qualifiés</h6>
            </div> 
            <div className="manager-wrapper">
                <div className="manager-right">
                    <div className="row row-sm">
                        {users.map((user, index) => {
                            return (
                                <div className="col-sm-6 col-lg-4" key={index}>
                                    <Components.UserCard user={user}/>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="/" className="btn btn-light btn-block mg-t-20">Charger plus</Link>
                </div>

                <div className="manager-left">
                    <label className="section-label-sm mg-t-25">Categories</label>
                    <nav className="nav">
                        {job_titles.map((job_title, index) => {
                            return (
                                <Link to={`/candidats/qualifies?job_title_id=${job_title.id}`} 
                                className="nav-link" key={index}>
                                    <span>{job_title.name}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </>
    )
}