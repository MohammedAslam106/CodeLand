/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'**/codeland.in'
            }
        ]
    }
}

module.exports = nextConfig
