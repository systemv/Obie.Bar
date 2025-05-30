// This file is auto-generated by Vite and contains environment variables
export const VITE_YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// Log the API key status (only the last 4 characters for security)
console.log('Environment API Key:', 
  import.meta.env.VITE_YOUTUBE_API_KEY 
    ? `Loaded (ends with: ${import.meta.env.VITE_YOUTUBE_API_KEY.slice(-4)})` 
    : 'Not found'
);

// Export all environment variables
export default {
  VITE_YOUTUBE_API_KEY: import.meta.env.VITE_YOUTUBE_API_KEY
};
