export interface AuthStrategy {
    login(): Promise<void>;
}
