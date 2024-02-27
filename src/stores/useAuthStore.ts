import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

// type AuthState = {
//     isAuthenticated: boolean;
//     user: string | null;
//     token: string | null;
//     login: (username: string, password: string) => void;
//     logout: () => void;
// };

const useAuthStore = create<any>(immer((set) => ({
  
    token: null,
    saveToken: (token) => { 
        set((state) => {
            state.token = token;
        });
    }
    ,

})))

export default useAuthStore;