
const nextConfig = {};

nextConfig.sassOptions = {
   // includePaths: ['./app/css/'],
   prependData: `@import "./app/css/shared/variablesAndMixins.scss";`,
};

export default nextConfig;
