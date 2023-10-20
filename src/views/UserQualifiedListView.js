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
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const loadUsers = async (can_append = false, currentPage = page) => {
        setIsLoading(true);

        try {
            const userList = await UserService.getQualified(
                {page: currentPage, job_title_id : searchParams.get('job_title_id')}, 
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

    const handleLoadMoreClick = e => {
        e.preventDefault();
        if (isLoading) return;

        setPage(page => page + 1);
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
        setPage(1);
        loadUsers(false, 1);
    },[searchParams.get('job_title_id')]);

    useEffect(() => {
        if (page === 1) return;
        loadUsers(true);
    },[page]);

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Candidats qualifiés</h6>
            </div>
            <Components.Loader isLoading={isLoading}>
                <div className="manager-wrapper">
                    <div className="manager-right">
                        <div className="row row-sm">
                            {users.map((user, index) => {
                                return (
                                    <div className="col-sm-6 col-lg-4 pb-2" key={index}>
                                        <Components.UserCard user={user}/>
                                    </div>
                                )
                            })}
                        </div>
                        <span to="/" className="btn btn-light btn-block mg-t-20"
                        onClick={handleLoadMoreClick}>
                            {isLoading ? "Chargements.." : "Charger plus"}
                        </span>
                    </div>

                    <div className="manager-left">
                        <label className="section-label-sm mg-t-25">Categories</label>
                        <nav className="nav">
                            {job_titles.map((job_title, index) => {
                                return (
                                    <Link to={`/candidats/qualifies?job_title_id=${job_title.id}`} 
                                    className={`nav-link ${parseInt(searchParams.get('job_title_id')) === 
                                    job_title.id ? 'active' : ''}`} key={index}>
                                        <span>{job_title.name}</span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            </Components.Loader>
        </>
    )
}