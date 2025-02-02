/** @type {import('next').NextConfig} */

export default{
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org', // Example: Wikipedia images
            },
            {
                protocol: 'https',
                hostname: 'images.app.goo.gl '

            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com', // Example: Default avatar images
            },
          
        ]
    }
};
