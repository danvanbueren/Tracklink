import {Card} from "@mui/material";
import * as React from "react";
import {useRoute} from "@/context/RouteContext";
import HomePage from "@/components/views/authenticated/HomePage";
import NotFoundPage from "@/components/views/noauth/NotFoundPage";
import AddFriendPage from "@/components/views/authenticated/AddFriendPage";
import ArchivePage from "@/components/views/authenticated/ArchivePage";
import CollabPage from "@/components/views/authenticated/CollabPage";
import NewPage from "@/components/views/authenticated/NewPage";
import ProjectsPage from "@/components/views/authenticated/ProjectsPage";
import QueuePage from "@/components/views/authenticated/QueuePage";
import RecentPage from "@/components/views/authenticated/RecentPage";
import SearchPage from "@/components/views/authenticated/SearchPage";
import SettingsPage from "@/components/views/authenticated/SettingsPage";
import StarredPage from "@/components/views/authenticated/StarredPage";
import TrackPage from "@/components/views/authenticated/TrackPage";
import TracksPage from "@/components/views/authenticated/TracksPage";
import TrashPage from "@/components/views/authenticated/TrashPage";
import UserPage from "@/components/views/authenticated/UserPage";
import SocialPage from "@/components/views/authenticated/SocialPage";
export default function ViewportInnerRouter({children}) {

    const { currentRoute, slug } = useRoute();

    const routeComponents = {
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
    };

    const content = routeComponents[currentRoute] || ( slug ? <NotFoundPage slug={slug} /> : <NotFoundPage /> );

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
}