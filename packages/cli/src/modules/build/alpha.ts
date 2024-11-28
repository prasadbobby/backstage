import { createPlugin } from '../../wiring/factory';
import { coreServices } from '../../wiring/services';
import { webpackServiceRef } from '../webpack/alpha';

export const buildPlugin = createPlugin({
  pluginId: 'build',
  register: async env => {
    env.registerInit({
      deps: {
        cli: coreServices.cli,
        webpack: webpackServiceRef,
      },
      async init({ cli, webpack }) {
        cli.command({
          path: ['package', 'build'],
          description: 'Build the current package',
          async execute() {
            console.log('Building package');
            console.log((await webpack.load()).version);
          },
        });
      },
    });
  },
});

export default buildPlugin;
