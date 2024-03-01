/* eslint-disable @typescript-eslint/no-unsafe-return */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {container, WebpackPluginInstance} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import packageJson from '../../package.json';

import {BuildOption} from './types/config';

function buildPlugins({
  paths,
  isDev,
  analyzerPort,
}: BuildOption): WebpackPluginInstance[] {
  return [
    new container.ModuleFederationPlugin({
      name: 'snackbar',
      filename: 'remoteEntry.js',
      runtime: false,
      library: {type: 'var', name: 'snackbar'},
      exposes: {
        './SnackbarComponent': paths.exposesPathSnackBar,
      },
      shared: {
        ...packageJson.dependencies,

        react: {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
        '@mui/material': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies['@mui/material'],
        },
        '@mui/styled-engine-sc':{
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies['@mui/styled-engine-sc'],
        },
        'styled-components': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies['styled-components'],
        },
        '@mui/icons-material': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.devDependencies['@mui/icons-material'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: paths.template,
    }),
    new webpack.DefinePlugin({
      isDev: JSON.stringify(isDev),
      baseURL: JSON.stringify('http://localhost:3000/'),
    }),

    isDev ? new webpack.HotModuleReplacementPlugin() : undefined,
    isDev
      ? new BundleAnalyzerPlugin({
          openAnalyzer: true,
          analyzerMode: 'server',
          reportFilename: paths.analyzer,
          analyzerPort,
        })
      : undefined,
  ];
}

export default buildPlugins;
