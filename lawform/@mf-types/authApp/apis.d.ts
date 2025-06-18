
    export type RemoteKeys = 'authApp/App';
    type PackageType<T> = T extends 'authApp/App' ? typeof import('authApp/App') :any;