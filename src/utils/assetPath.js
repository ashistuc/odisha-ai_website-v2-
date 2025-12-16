// Utility to get the correct asset path based on environment
export const getAssetPath = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // Remove the hardcoded prefix if it exists
    const withoutPrefix = cleanPath.replace('odisha-ai_website-v2-/', '');

    // Use PUBLIC_URL from environment (set from package.json homepage)
    const publicUrl = process.env.PUBLIC_URL || '';

    // Return the full path
    return `${publicUrl}/${withoutPrefix}`;
};

export default getAssetPath;
