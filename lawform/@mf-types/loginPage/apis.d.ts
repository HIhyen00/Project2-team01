
    export type RemoteKeys = 'loginPage/App';
    type PackageType<T> = T extends 'loginPage/App' ? typeof import('loginPage/App') :any;