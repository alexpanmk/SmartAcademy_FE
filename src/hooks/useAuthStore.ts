import create from 'zustand';

type AuthState = {
    isAuthenticated: boolean;
    user: string | null;
    token: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    token: null,
    login: (username, password) => {
        // Perform authentication logic here
        // For example, make an API call to validate the credentials
        // If the credentials are valid, set isAuthenticated to true and set the user
        set({ isAuthenticated: true, user: username });
    },
    logout: () => {
        // Perform logout logic here
        // For example, clear the authentication token and reset the user
        set({ isAuthenticated: false, user: null });
    },
}));

export default useAuthStore;