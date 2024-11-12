import {RouteProvider} from "@/contexts/RouteContext";
import SpaRouter from "@/components/SpaRouter";
import {AudioPlayerProvider} from "@/contexts/AudioPlayerContext";

export const metadata = {
    title: "NextJS AudioPlayer Demo",
    description: "NextJS AudioPlayer Demo",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <RouteProvider>
                    <AudioPlayerProvider>
                        <SpaRouter>

                            {children}

                        </SpaRouter>
                    </AudioPlayerProvider>
                </RouteProvider>
            </body>
        </html>
    );
}
