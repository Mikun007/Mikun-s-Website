import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Footer from "./components/Footer";
import Nav from "./components/Nav";


import AnimatedRoutes from "./components/AnimatedRoutes";

const queryClient = new QueryClient();

function App() {
    
    return (
    <QueryClientProvider client={queryClient}>
            <Router>
                <Nav />
                <AnimatedRoutes />
                <Footer />
            </Router>
    </QueryClientProvider>
        
    );
};

export default App;
