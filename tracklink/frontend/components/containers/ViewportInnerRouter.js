import {Card} from "@mui/material";
import * as React from "react";
import {useRoute} from "@/context/RouteContext";
import HomePage from "@/components/views/auth/HomePage";
import NotFoundPage from "@/components/views/unauth/NotFoundPage";
import AddFriendPage from "@/components/views/auth/AddFriendPage";
import ArchivePage from "@/components/views/auth/ArchivePage";
import CollabPage from "@/components/views/auth/CollabPage";
import NewPage from "@/components/views/auth/NewPage";
import ProjectsPage from "@/components/views/auth/ProjectsPage";
import QueuePage from "@/components/views/auth/QueuePage";
import RecentPage from "@/components/views/auth/RecentPage";
import SearchPage from "@/components/views/auth/SearchPage";
import SettingsPage from "@/components/views/auth/SettingsPage";
import StarredPage from "@/components/views/auth/StarredPage";
import TrackPage from "@/components/views/auth/TrackPage";
import TracksPage from "@/components/views/auth/TracksPage";
import TrashPage from "@/components/views/auth/TrashPage";
import UserPage from "@/components/views/auth/UserPage";
import SocialPage from "@/components/views/auth/SocialPage";
import LandingPage from "@/components/views/unauth/LandingPage";
import LoginPage from "@/components/views/unauth/LoginPage";
import RegisterPage from "@/components/views/unauth/RegisterPage";
import ResetPasswordPage from "@/components/views/unauth/ResetPasswordPage";

export default function ViewportInnerRouter({children}) {

    const { currentRoute, slug, isAuthenticated } = useRoute();

    const authRoutes = {
        '/': slug ? <HomePage slug={slug} /> : <HomePage />,
        '/addfriend': slug ? <AddFriendPage slug={slug} /> : <AddFriendPage />,
        '/archive': slug ? <ArchivePage slug={slug} /> : <ArchivePage />,
        '/collab': slug ? <CollabPage slug={slug} /> : <CollabPage />,
        '/new': slug ? <NewPage slug={slug} /> : <NewPage />,
        '/projects': slug ? <ProjectsPage slug={slug} /> : <ProjectsPage />,
        '/queue': slug ? <QueuePage slug={slug} /> : <QueuePage />,
        '/recent': slug ? <RecentPage slug={slug} /> : <RecentPage />,
        '/search': slug ? <SearchPage slug={slug} /> : <SearchPage />,
        '/settings': slug ? <SettingsPage slug={slug} /> : <SettingsPage />,
        '/social': slug ? <SocialPage slug={slug} /> : <SocialPage />,
        '/starred': slug ? <StarredPage slug={slug} /> : <StarredPage />,
        '/track': slug ? <TrackPage slug={slug} /> : <TrackPage />,
        '/tracks': slug ? <TracksPage slug={slug} /> : <TracksPage />,
        '/trash': slug ? <TrashPage slug={slug} /> : <TrashPage />,
        '/user': slug ? <UserPage slug={slug} /> : <UserPage />,

        '/login': <HomePage />,
        '/register': <HomePage />,
        '/resetpassword': <HomePage />,
    };

    const unauthRoutes = {
        '/': slug ? <LandingPage slug={slug} /> : <LandingPage />,
        '/login': slug ? <LoginPage slug={slug} /> : <LoginPage />,
        '/register': slug ? <RegisterPage slug={slug} /> : <RegisterPage />,
        '/resetpassword': slug ? <ResetPasswordPage slug={slug} /> : <ResetPasswordPage />,

        '/addfriend': <LoginPage />,
        '/archive': <LoginPage />,
        '/collab': <LoginPage />,
        '/new': <LoginPage />,
        '/projects': <LoginPage />,
        '/queue': <LoginPage />,
        '/recent': <LoginPage />,
        '/search': <LoginPage />,
        '/settings': <LoginPage />,
        '/social': <LoginPage />,
        '/starred': <LoginPage />,
        '/track': <LoginPage />,
        '/tracks': <LoginPage />,
        '/trash': <LoginPage />,
        '/user': <LoginPage />,
    };

    if (isAuthenticated) {
        const content = authRoutes[currentRoute] || ( slug ? <NotFoundPage slug={slug} /> : <NotFoundPage /> );

        return (
            <>
                <Card
                    sx={{
                        minWidth: '100%',
                        borderRadius: '20px',
                        paddingX: '20px',
                        paddingY: '15px',
                        overflow: 'auto',
                    }}
                >
                    {content}
                </Card>
            </>
        )
    } else {
        const content = unauthRoutes[currentRoute] || ( slug ? <NotFoundPage slug={slug} /> : <NotFoundPage /> );

        return (
            <>
                {content}
            </>
        )
    }


}