import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useLogoutTimer() {
    const useIsInactive = useFakeInactiveUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (useIsInactive) {
            fake.logout();
            navigate("/session-timed-out");
        }
    }, [useIsInactive, navigate]);
}

