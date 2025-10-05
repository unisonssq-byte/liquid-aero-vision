import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2bce5ed3ef3443e6a00679111b2f2d2d',
  appName: 'liquid-aero-vision',
  webDir: 'dist',
  server: {
    url: 'https://2bce5ed3-ef34-43e6-a006-79111b2f2d2d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
