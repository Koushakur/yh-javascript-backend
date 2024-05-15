/** @type {import('next').NextConfig} */
const nextConfig = {};

nextConfig.sassOptions = {
   includePaths: ['./app/css'],
   prependData: `@import "/shared/colors.scss";`,
};

export default nextConfig;
