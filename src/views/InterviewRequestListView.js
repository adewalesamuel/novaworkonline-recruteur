import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Services } from "../services";
import { Components } from "../components";

export function InterviewRequestListView(props) {
    let abortController = new AbortController();

    const { InterviewRequestService } = Services;

    const [interview_requests, setInterview_requests] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const loadInterviewRequests = async (currentPage = page) => {
        setIsLoading(true);

        try {
            const interview_requestList = await InterviewRequestService.getAll(
                {page: currentPage}, abortController.signal);
            
            const interview_requestsCopy = interview_requests.map(interview_request => 
                ({...interview_request, user: interview_request.user}))
            setInterview_requests([...interview_requestsCopy, 
                ...interview_requestList.interview_requests.data]);

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
            const {interview_requests} = await InterviewRequestService.getAll(
                {page: page}, abortController.signal);

            setInterview_requests(interview_requests.data);
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
        loadInterviewRequests();
    },[page]);

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Invités pour entretiens</h6>
            </div> 
            <div className="row">
                <div className="col-12">
                    <div className="row row-sm">
                        {interview_requests.map((interview_request, index) => {
                            return (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <Components.UserCard user={interview_request.user}/>
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
        </>
    )
}