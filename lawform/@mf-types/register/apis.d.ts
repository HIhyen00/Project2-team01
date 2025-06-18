
    export type RemoteKeys = 'register/App';
    type PackageType<T> = T extends 'register/App' ? typeof import('register/App') :any;