import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import "../styles/layout.css";

export default function MainLayout() {
    return (
        <div className="main-layout">
            {/* Navbar aparece em todas as rotas que usam o MainLayout */}
            <Navbar />

            <main className="page-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}