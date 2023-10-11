import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Services } from "../services";
import { Components } from "../components";

export function InterviewRequestListView(props) {
    const abortController = new AbortController();
    const { JobTitleService, InterviewRequestService } = Services;

    const [searchParams, setSearchParams] = useSearchParams();

    const [job_titles, setJob_titles] = useState([]);
    const [interview_requests, setInterview_requests] = useState([]);
    const [page, setPage] = useState(searchParams.get('page') ?? 1);
    const [isLoading, setIsLoading] = useState(false);

    const loadInterviewRequests = async () => {
        setIsLoading(true);

        try {
            const interview_requestList = await InterviewRequestService.getAll(
                {page: page}, abortController.signal);
            
            const interview_requestsCopy = interview_requests.map(interview_request => 
                ({...interview_request, user: interview_request.user}))
            setInterview_requests([...interview_requestsCopy, 
                ...interview_requestList.interview_requests.data]);

        } catch (error) {
            console.log(error);
        }finally{setIsLoading(false)}
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
      init()
    }, [init])

    useEffect(() => {
        // loadInterviewRequests();
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
                    <Link to="/" className="btn btn-light btn-block mg-t-20">Charger plus</Link>
                </div>
            </div>
        </>
    )
}