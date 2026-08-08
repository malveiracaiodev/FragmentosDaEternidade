import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Story from "./pages/Story";
import ChapterReader from "./pages/ChapterReader"; // Importando a nova página de exibição
import Characters from "./pages/Characters";
import Caleb from "./pages/Caleb";
import World from "./pages/World";
import { Login } from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* =================================
                    ÁREA DE LEITURA ISOLADA (SEM NAVBAR/HUD)
                ================================== */}
                <Route
                    path="/historia/:chapterId"
                    element={<ChapterReader />}
                />

                {/* =================================
                    ÁREA PRINCIPAL DO UNIVERSO (COM LAYOUT)
                ================================== */}
                <Route
                    element={<MainLayout />}
                >

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/historia"
                        element={<Story />}
                    />

                    <Route
                        path="/mundo"
                        element={<World />}
                    />

                    <Route
                        path="/personagens"
                        element={<Characters />}
                    />

                    <Route
                        path="/caleb"
                        element={<Caleb />}
                    />

                    <Route
                        path="/perfil"
                        element={<Profile />}
                    />

                </Route>

                {/* =================================
                    ÁREA DE AUTENTICAÇÃO
                ================================== */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* =================================
                    FALLBACK
                ================================== */}

                <Route
                    path="*"
                    element={<Home />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;