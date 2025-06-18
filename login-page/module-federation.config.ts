export const mfConfig = {
  name: "authApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
    // "./LoginModalPage": "./src/ui/components/LoginModalPage.tsx",
    // "./OpenLoginModal": "./src/ui/components/OpenLoginModal.tsx"
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "@mui/icons-material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};