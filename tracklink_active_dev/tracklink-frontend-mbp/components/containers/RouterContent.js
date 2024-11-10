import {Card} from "@mui/material";
import * as React from "react";
import {useRoute} from "@/context/RouteContext";
import HomePage from "@/app/home/page";
import NotFoundPage from "@/components/views/NotFoundPage";
import AddFriendPage from "@/app/addfriend/page";
import ArchivePage from "@/app/archive/page";
import CollabPage from "@/app/collab/page";
import NewPage from "@/app/new/page";
import ProjectsPage from "@/app/projects/page";
import QueuePage from "@/app/queue/page";
import RecentPage from "@/app/recent/page";
import SearchPage from "@/app/search/page";
import SettingsPage from "@/app/settings/page";
import StarredPage from "@/app/starred/page";
import TrackPage from "@/app/track/page";
import TracksPage from "@/app/tracks/page";
import TrashPage from "@/app/trash/page";
import UserPage from "@/app/user/[slug]/page";
export default function RouterContent({children}) {

    const { currentRoute, slug, navigate } = useRoute();

    const routeComponents = {
        '/': slug ? <HomePage slug={slug} /> : <HomePage />,
        '/addfriend': slug ? <AddFriendPage slug={slug} /> : <AddFriendPage />,
        '/archive': slug ? <ArchivePage slug={slug} /> : <ArchivePage />,
        '/collab': slug ? <CollabPage slug={slug} /> : <CollabPage />,
        '/home': slug ? <HomePage slug={slug} /> : <HomePage />,
        '/new': slug ? <NewPage slug={slug} /> : <NewPage />,
        '/projects': slug ? <ProjectsPage slug={slug} /> : <ProjectsPage />,
        '/queue': slug ? <QueuePage slug={slug} /> : <QueuePage />,
        '/recent': slug ? <RecentPage slug={slug} /> : <RecentPage />,
        '/search': slug ? <SearchPage slug={slug} /> : <SearchPage />,
        '/settings': slug ? <SettingsPage slug={slug} /> : <SettingsPage />,
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