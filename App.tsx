import {PaperProvider} from "react-native-paper";
import {QueryClient, QueryClientProvider} from "react-query";
import {AuthProvider} from "./hooks/useAuth";
import {Navigation} from "./Navigation";

export default function App() {
    return (
        <AuthProvider>
            <PaperProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <Navigation/>
                </QueryClientProvider>
            </PaperProvider>
        </AuthProvider>
    )
}