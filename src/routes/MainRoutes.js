import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import { Views } from "../views";

export function MainRoutes(props) {
    return (
        <Layout.MainLayoutV2>
            <Routes>
                <Route path="/packs" element={<Views.SubscriptionPackListView />} />
                <Route path="/paiements" element={<Views.SubscriptionListView />} />
                <Route path="/candidats/:id" element={<Views.UserShowView />} />
                <Route path="/projet/creer" element={<Views.ProjectCreateView />} />
                <Route path="/projets/:id/modifier" element={<Views.ProjectEditView />} />
                <Route path="/projets" element={<Views.ProjectListView />} />
                <Route path="/employes" element={<Views.EmployeeListView />} />
                <Route path="/demandes-entretiens" element={<Views.InterviewRequestListView />} />
                <Route path="/candidats/qualifies" element={<Views.UserQualifiedListView />} />
                <Route path="/profil" element={<Views.ProfileView />} />
                <Route path="/" element={<Views.DashboardView />}/>
            </Routes>

        </Layout.MainLayoutV2>
    )
}