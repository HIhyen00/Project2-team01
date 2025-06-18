export const mfConfig = {
  name: "lawform",
  remotes: {
    authApp: "authApp@http://localhost:3005/remoteEntry.js",
    register: "register@http://localhost:3004/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};