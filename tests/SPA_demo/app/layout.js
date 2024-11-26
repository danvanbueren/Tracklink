import {RouteProvider} from "@/contexts/RouteContext";
import SpaRouter from "@/components/SpaRouter";

export const metadata = {
    title: "NextJS SPA Demo",
    description: "NextJS SPA Demo",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <RouteProvider>
                    <SpaRouter>
                        {children}
                    </SpaRouter>
                </RouteProvider>
            </body>
        </html>
    );
}
