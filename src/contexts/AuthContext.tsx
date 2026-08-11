import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../firebase/auth";

import {
  PlayerService,
} from "../services/player/PlayerService";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        setUser(firebaseUser);

        try {
          if (firebaseUser) {
            await PlayerService.createPlayer(firebaseUser).catch((error) => {
              console.error("Erro ao sincronizar jogador:", error);
            });
          }
        } finally {
          setLoading(false);
        }
      }
    );

    return unsubscribe;
  }, []);

  const login = useCallback(async () => {
    try {
      // Retornamos para o Popup, que mantém a sessão na mesma aba sem quebrar as rotas do GitHub Pages
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error("Erro no login com popup:", error);
      
      // Caso o navegador bloqueie o popup, você pode avisar o usuário ou tentar uma alternativa
      if (error.code === 'auth/popup-blocked') {
        alert("O navegador bloqueou a janela de login. Por favor, permita pop-ups para este site.");
      }
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao sair:", error);
      throw error;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro do AuthProvider.");
  }

  return context;
}